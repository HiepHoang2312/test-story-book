import { Card } from "./Card";

export default {
  title: "New/Card",
  component: Card,
};

export const Summary = (args) => (
  <>
    <Card {...args}></Card>
  </>
);
