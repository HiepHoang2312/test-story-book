import { PostInfor } from "./PostInfor";

export default {
  title: "New/PostInfor",
  component: PostInfor,
};

export const PostInforTemplate = (args) => (
  <>
    <PostInfor {...args}></PostInfor>
  </>
);
