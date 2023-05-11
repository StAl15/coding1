/** @jsxImportSource @emotion/react */
import "twin.macro";
import {GroupedAutoComplete} from "./components/GroupedAutoComplete/GroupedAutoComplete";
import {top100Films} from "./utils/fakeData";

function App() {
    return (
        <>
            <div tw={"p-5"}>
                <GroupedAutoComplete data={top100Films}/>
            </div>
        </>
    );
}

export default App;
