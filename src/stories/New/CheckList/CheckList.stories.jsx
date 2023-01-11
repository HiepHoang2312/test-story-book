import { CheckList } from "./CheckList";

export default {
  title: "New/CheckList",
  component: CheckList,
};

export const Checklist = (args) => (
  <>
    <CheckList {...args}></CheckList>
  </>
);
