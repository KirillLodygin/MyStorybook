import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import {ButtonGroup, ButtonGroupProps} from './ButtonGroup';

export default {
	title: 'My StoryBook/Button Group',
	component: ButtonGroup,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const Horizontal_button_group = Template.bind({});
Horizontal_button_group.args = {
	buttons: ['Button 1', 'Button 2', 'Button 3'],
};

export const Vertical_button_group = Template.bind({});
Vertical_button_group.args = {
	buttons: ['Button 1', 'Button 2', 'Button 3'],
	vertical: true,
};

export const Switcher_button_group = Template.bind({});
Switcher_button_group.args = {
	buttons: ['ON', 'OFF'],
};