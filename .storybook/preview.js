/** @type { import('@storybook/react').Preview } */
import {GlobalStyles} from "twin.macro";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  Story => (
      <>
        <GlobalStyles />
        <Story />
      </>
  ),
]


export default preview;
