import { Card } from "./Card";

export default {
  title: "New/Card",
  component: Card,
};
export const Default = (args) => (
  <>
    <Card {...args}></Card>
  </>
);
