import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import {Button, ButtonProps} from './Button';

export default {
	title: 'My StoryBook/Button',
	component: Button,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Text_and_onClick_function = Template.bind({});
Text_and_onClick_function.args = {
	label: 'Button text',
};

export const Disabled_button = Template.bind({});
Disabled_button.args = {
	disabled: true,
};

export const Active_button = Template.bind({});
Active_button.args = {
	active: true,
};

export const Supporting_etc_attributes = Template.bind({});
Supporting_etc_attributes.args = {
	type: 'submit',
};