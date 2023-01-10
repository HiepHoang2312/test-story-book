import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
const Template = (args) => <Input {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
