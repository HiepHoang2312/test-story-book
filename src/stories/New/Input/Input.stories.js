import { Input } from "./Input";

export default {
  title: "New/Input",
  component: Input,
};

export const Default = (args) => (
  <>
    <Input {...args}></Input>
  </>
);

export const Number = Default.bind({});

Number.args = {
  size: "small",
  type: "number",
};

export const Checkbox = Default.bind({});

Checkbox.args = {
  size: "small",
  type: "checkbox",
};

export const Password = Default.bind({});

Password.args = {
  size: "small",
  type: "password",
};

export const Color = Default.bind({});

Color.args = {
  size: "small",
  type: "color",
};

export const File = Default.bind({});

File.args = {
  size: "small",
  type: "file",
};
