import React from "react";
import { StoryFn, Meta} from "@storybook/react";
import LabeledInput from "./LabeledInput";

export default {
  title: "Molecules/LabeledInput",
  component: LabeledInput,
} as Meta<typeof LabeledInput>;

const Template: StoryFn<typeof LabeledInput> = (args) => (
  <LabeledInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "input-id",
  label: "ラベル",
  value: "",
  onChange: () => {},
  required: true,
};
