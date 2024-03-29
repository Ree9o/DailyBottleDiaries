import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Button',
  className: 'py-4 px-6 text-xl',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small Button',
  className: 'py-1 px-2 text-sm',
};
