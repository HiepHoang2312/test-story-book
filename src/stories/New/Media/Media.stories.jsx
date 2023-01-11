import { MediaOnly } from "./Media";

export default {
  title: "New/Media",
  component: MediaOnly,
};

export const OnlyMedia = (args) => (
  <>
    <MediaOnly {...args}></MediaOnly>
  </>
);
