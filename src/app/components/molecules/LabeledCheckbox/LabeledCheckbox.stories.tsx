import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LabeledCheckbox from "./LabeledCheckbox";

export default {
  title: "Molecules/LabeledCheckbox",
  component: LabeledCheckbox,
} as ComponentMeta<typeof LabeledCheckbox>;

const Template: ComponentStory<typeof LabeledCheckbox> = (args) => (
  <LabeledCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "checkbox-id",
  label: "チェックボックス",
  checked: false,
  onChange: () => {},
};
