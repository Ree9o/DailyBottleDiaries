import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button>Primary Button</Button>,
};

export const Secondary: Story = {
  render: () => <Button className="bg-gray-500 hover:bg-gray-600">Secondary Button</Button>,
};

export const Large: Story = {
  render: () => <Button className="py-4 px-8 text-xl">Large Button</Button>,
};

export const Small: Story = {
  render: () => <Button className="py-1 px-2 text-sm">Small Button</Button>,
};

export const CustomClick: Story = {
  render: () => (
    <Button
      onClick={() => {
        alert("Button clicked!");
      }}
    >
      Custom Click
    </Button>
  ),
};

export const SubmitButton: Story = {
  render: () => <Button type="submit">Submit Button</Button>,
};
