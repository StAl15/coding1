/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import {GroupedAutoComplete} from "./components/GroupedAutoComplete/GroupedAutoComplete";

export const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974},
    {title: 'The Dark Knight', year: 2008},
    {title: '12 Angry Men'},
    {title: "Schindler's List", year: 1993},
    {title: 'Pulp Fiction', year: 1994},
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    }]


function App() {
    return (
        <div tw="p-5">
            <GroupedAutoComplete data={top100Films}/>
        </div>
    );
}

export default App;
