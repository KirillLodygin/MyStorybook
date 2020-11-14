import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import {Badge, BadgeProps} from './Badge';

export default {
	title: 'My StoryBook/Badge',
	component: Badge,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as Meta;

const Template: Story<BadgeProps> = args => <Badge {...args}/>;

export const Badge_without_text = Template.bind({});
Badge_without_text.args = {
	value: ''
};

export const Badge_with_text = Template.bind({});
Badge_with_text.args = {
	value: 'text'
};

export const Circle_badge_with_text = Template.bind({});
Circle_badge_with_text.args = {
	value: 'text',
	circle: true
};

export const Badge_with_number = Template.bind({});
Badge_with_number.args = {
	value: 20
};

export const Circle_badge_with_number = Template.bind({});
Circle_badge_with_number.args = {
	value: 2,
	circle: true
};

export const Inline_Badge = Template.bind({});
Inline_Badge.args = {
	inline: true,
	value: '1 missed'
};

export const Outer_Badge = Template.bind({});
Outer_Badge.args = {
	value: 1,
	outer: true
};

export const Outer_warning_Badge = Template.bind({});
Outer_warning_Badge.args = {
	value: 2,
	outer: true,
	warning: true
};

export const Outer_info_Badge = Template.bind({});
Outer_info_Badge.args = {
	value: 2,
	outer: true,
	info: true
};

export const Outer_alert_Badge = Template.bind({});
Outer_alert_Badge.args = {
	value: 2,
	outer: true,
	alert: true
};

export const Outer_success_Badge = Template.bind({});
Outer_success_Badge.args = {
	value: 2,
	outer: true,
	success: true
};

export const Circle_warning_Badge = Template.bind({});
Circle_warning_Badge.args = {
	value: 5,
	warning: true,
	circle: true
};

export const Circle_alert_Badge = Template.bind({});
Circle_alert_Badge.args = {
	value: 3,
	circle: true,
	alert: true
};

export const Circle_success_Badge = Template.bind({});
Circle_success_Badge.args = {
	value: 1,
	circle: true,
	success: true
};

export const Circle_info_Badge = Template.bind({});
Circle_info_Badge.args = {
	value: 1,
	circle: true,
	info: true
};

export const Warning_Badge = Template.bind({});
Warning_Badge.args = {
	value: 5,
	warning: true
};

export const Alert_Badge = Template.bind({});
Alert_Badge.args = {
	value: 3,
	alert: true
};

export const Success_Badge = Template.bind({});
Success_Badge.args = {
	value: 1,
	success: true
};

export const Info_Badge = Template.bind({});
Info_Badge.args = {
	value: 1,
	info: true
};