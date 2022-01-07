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
  children: 'Dark Text',
};

export const Light = Template.bind({});
Light.args = {
  children: 'Light Text',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Text',
};

export const Hint = Template.bind({});
Hint.args = {
  children: 'Hint Text',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success Text',
};

export const Info = Template.bind({});
Info.args = {
  children: 'Info Text',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning Text',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger Text',
};
