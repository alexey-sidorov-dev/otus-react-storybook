import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Breaker } from ".";

export default {
  title: "Example/Breaker",
  component: Breaker,
} as ComponentMeta<typeof Breaker>;

const Template: ComponentStory<typeof Breaker> = (args) => (
  <Breaker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  number: 1,
  text: [
    "Lorem ipsum dolor sit amet",
    "consectetur adipiscing elit",
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ].join(", "),
};
