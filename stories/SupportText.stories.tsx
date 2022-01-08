import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SupportText } from './SupportText';

export default {
  title: 'Example/SupportText',
  component: SupportText,
} as ComponentMeta<typeof SupportText>;

const Template: ComponentStory<typeof SupportText> = (args) => <SupportText {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  children: 'Support Text',
  variant: 's5',
  mode: 'dark'
};

export const Light = Template.bind({});
Light.args = {
  children: 'Support Text',
  variant: 's5',
  mode: 'light'
};
