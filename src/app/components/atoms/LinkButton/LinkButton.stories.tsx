import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RouterButton from "./LinkButton";

export default {
  title: "Components/RouterButton",
  component: RouterButton,
} as ComponentMeta<typeof RouterButton>;

const Template: ComponentStory<typeof RouterButton> = (args) => <RouterButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  path: "/",
  children: "Default Button",
  className: "",
};

export const Primary = Template.bind({});
Primary.args = {
  path: "/primary",
  children: "Primary Button",
  className: "bg-primary text-white",
};

export const Large = Template.bind({});
Large.args = {
  path: "/large",
  children: "Large Button",
  className: "py-4 px-6 text-xl",
};
