import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from ".";
import { text } from "../../constants";

export default {
  title: "Example/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  level: 1,
  text,
};
