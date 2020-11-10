import React from 'react';
import './image.sass';

export interface ImageProps {
	src: string,
	alt: string,
	width: number,
	height: number,
	circle: boolean,
	className: string,
	[propName: string]: any,
}

export const Image: React.FC<ImageProps> = ({
												src = '',
												alt = 'image',
												width = 100,
												height = 100,
												circle = false,
												className = '',
												...attrs
											}) => {
	const classes = (circle) ? className + ' circle' : className;
	if(!src) {
		src = `https://via.placeholder.com/${width}x${height}`;
	}

	return <img
		src={src}
		alt={alt}
		className={classes}
		width={width}
		height={height}
		{...attrs}
	/>
};