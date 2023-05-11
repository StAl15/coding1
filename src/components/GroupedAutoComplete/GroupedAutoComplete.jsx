/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import {Autocomplete, TextField} from "@mui/material";
import {useState} from "react";
import parse from "autosuggest-highlight/parse"
import match from "autosuggest-highlight/match";


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
            sx={{width: 300}}
            renderInput={(params) =>
                <TextField {...params}/>
            }
            autoSelect={false}
            renderGroup={(params) =>
                <div tw={"overflow-hidden"}>
                    <div tw={"p-2 bg-[#F3F3F4]"}>
                        <span tw={"font-semibold text-[#95999D]"}>{params.group.toString()}</span>
                    </div>
                    {params.children.map((item, idx) =>
                        <div
                            key={item.id}
                            css={[idx === 0 && tw`border-l-red-600 border-l-4`,
                                tw`p-1 pl-2 m-2 h-fit hover:bg-[#DEE8F5] hover:text-[#4D9FDB]`]}>
                            {item}
                        </div>
                    )}


                </div>
            }
            renderOption={(params, option, {inputValue}) => {
                const matchesTitle = match(option.title, inputValue, {insideWords: true});
                const partsTitle = parse(option.title, matchesTitle);

                const matchesYear = match(option.year ? option.year.toString() : '', inputValue, {insideWords: true});
                const partsYear = parse(option.year ? option.year.toString() : '', matchesYear);

                return (
                    <div tw={"grid"}>
                        <div>
                            {partsTitle.map((part, index) => (
                                <span
                                    key={part.id}
                                    css={[part.highlight && tw`font-semibold`]}
                                >
                                {part.text}
                            </span>
                            ))}
                        </div>
                        <div>
                            {partsYear.map((part, index) => (
                                <span
                                    key={part.id}
                                    css={[part.highlight && tw`font-semibold`, tw`text-sm text-[#95999D]`]}
                                >
                                {part.text.toString()}
                            </span>
                            ))}
                        </div>
                    </div>
                )
            }}
        />
    );
};