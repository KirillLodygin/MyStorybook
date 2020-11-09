import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import {Icon, IconProps} from "./Icon";

export default {
	title: 'My StoryBook/Icon',
	component: Icon,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Base_icon = Template.bind({});
Base_icon.args = {
	name: 'sky'
};

export const Small_icon = Template.bind({});
Small_icon.args = {
	name: 'atom',
	size: 'sm'
};

export const Disabling_icon_functionality = Template.bind({});
Disabling_icon_functionality.args = {
	name: 'atlas',
	disabled: true
};

export const Large_icon = Template.bind({});
Large_icon.args = {
	name: 'atom',
	size: 'lg'
};

/*
export const Icons_button_group = Template.bind({});
Icons_button_group.args = {
	name: 'formatting',
	size: '10px'
};

 */