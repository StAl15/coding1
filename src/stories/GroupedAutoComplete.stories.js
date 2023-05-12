// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
import {GroupedAutoComplete} from "../components/GroupedAutoComplete/GroupedAutoComplete";
import {top100Films} from "../utils/fakeData";
// import {Meta} from "@storybook/react";

const meta = {
    title: 'Example/GroupAutoComplete',
    component: GroupedAutoComplete,
    tags: ['autodocs'],
    argTypes: {
        data: top100Films
    },
}
export default meta

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        data: top100Films
    },
};



