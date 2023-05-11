/** @jsxImportSource @emotion/react */
import "twin.macro";
import {Autocomplete, TextField} from "@mui/material";
import {parseHighlited} from "../../utils/parseHighlited";
import {ItemGroup} from "./itemGroup";
import {ItemOption} from "./itemOption";


export const GroupedAutoComplete = ({data}) => {
    const options = data.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
            ...option,
        };
    });
    return (
        <Autocomplete
            id="grouped-demo"
            freeSolo={true}
            disableClearable={true}
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => [option.title, option.year]}
            tw={"w-80"}
            renderInput={(params) =>
                <TextField {...params}/>
            }
            autoSelect={false}
            renderGroup={(params) =>
                <ItemGroup params={params}/>
            }
            renderOption={(params, option, {inputValue}) => {
                const partsTitle = parseHighlited(option.title, inputValue)
                const partsYear = parseHighlited(option.year, inputValue)
                return (
                    <div tw={"grid"}>
                        <ItemOption parts={partsTitle}/>
                        <ItemOption parts={partsYear} isSubtitle={true}/>
                    </div>
                )
            }}
        />
    );
};