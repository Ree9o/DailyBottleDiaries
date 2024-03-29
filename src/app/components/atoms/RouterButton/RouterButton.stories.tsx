import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RouterButton from './RouterButton';

export default {
  title: 'Components/RouterButton',
  component: RouterButton,
} as ComponentMeta<typeof RouterButton>;

const Template: ComponentStory<typeof RouterButton> = (args) => <RouterButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: '/',
  children: 'Default Button',
  className: '',
};

export const Primary = Template.bind({});
Primary.args = {
  url: '/primary',
  children: 'Primary Button',
  className: 'bg-primary text-white',
};

export const Large = Template.bind({});
Large.args = {
  url: '/large',
  children: 'Large Button',
  className: 'py-4 px-6 text-xl',
};
