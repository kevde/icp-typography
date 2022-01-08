import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './Typography';

export default {
  title: 'Example/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  children: 'Dark Mode',
  variant: 'h1',
  mode: 'dark'
};

export const Light = Template.bind({});
Light.args = {
  children: 'Light Mode',
  variant: 'h1',
  mode: 'light'
};
