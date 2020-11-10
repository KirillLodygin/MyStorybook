import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {Image, ImageProps} from './Image';

export default {
	title: 'My StoryBook/Image',
	component: Image,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta;

const Template: Story<ImageProps> = args => <Image {...args}/>;

export const Base_image_placeholder = Template.bind({});
Base_image_placeholder.args = {};

export const Image_with_src_and_alt_attribute = Template.bind({});
Image_with_src_and_alt_attribute.args = {
	src: 'https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1',
	alt: 'alt_attribute'
};

export const Image_placeholder_with_50x50_size = Template.bind({});
Image_placeholder_with_50x50_size.args = {
	width: 50,
	height: 50,
	src: 'https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1',
};

export const Circle_image_with_150x150_size = Template.bind({});
Circle_image_with_150x150_size.args = {
	width: 150,
	height: 150,
	src: 'https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1',
	alt: 'circle_image',
	circle: true
};