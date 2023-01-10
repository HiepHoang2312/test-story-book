import { IconTemplate } from "./IconTemplate";

export default {
  title: "New/IconTemplate",
  component: IconTemplate,
};

export const Vertical = (args) => (
  <>
    <IconTemplate {...args}></IconTemplate>
  </>
);

export const Horizontal = Vertical.bind({});
Horizontal.args = {
  layout: "horizontal",
  color: "#a0fff0",
};
