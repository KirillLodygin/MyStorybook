import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import {Chip, ChipProps} from './Chip';

export default {
	title: 'My StoryBook/Chip',
	component: Chip,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as Meta;

const Template: Story<ChipProps> = args => <Chip {...args}/>;

export const Chip_with_text = Template.bind({});
Chip_with_text.args = {
	text: 'User name'
};

export const Chip_with_long_text = Template.bind({});
Chip_with_long_text.args = {
	text: 'Very long chip text should be cropped'
};

export const Chips_with_icon = Template.bind({});
Chips_with_icon.args = {
	withIcon: true,
	text: 'User name'
};

export const Chips_with_close_button = Template.bind({});
Chips_with_close_button.args = {
	withClose: true,
	text: 'User name'
};

export const Full_chip_with_icon = Template.bind({});
Full_chip_with_icon.args = {
	withIcon: true,
	withClose: true,
	text: 'Full Chip'
};

export const Chip_with_image = Template.bind({});
Chip_with_image.args = {
	withImage: true,
	text: 'React'
};

export const Full_chip_with_image = Template.bind({});
Full_chip_with_image.args = {
	withImage: true,
	withClose: true,
	text: 'React'
};