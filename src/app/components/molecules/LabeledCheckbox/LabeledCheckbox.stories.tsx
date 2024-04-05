import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import LabeledCheckbox from "./LabeledCheckbox";

export default {
  title: "Molecules/LabeledCheckbox",
  component: LabeledCheckbox,
} as Meta<typeof LabeledCheckbox>;

const Template: StoryFn<typeof LabeledCheckbox> = (args) => (
  <LabeledCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "checkbox-id",
  label: "チェックボックス",
  checked: false,
  onChange: () => {},
};
