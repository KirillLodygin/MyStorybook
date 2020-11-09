import React from 'react';
import './icon.css';
import { FaSkyatlas, FaAtlas } from 'react-icons/fa';
import { DiAtom } from 'react-icons/di';
//import { BiAlignLeft, BiAlignMiddle, BiAlignJustify, BiAlignRight } from 'react-icons/bi';

export interface IconProps {
	name: 'sky' | 'atlas' | 'atom',
	className: string,
	size: string,
	onClick: () => void,
	disabled: boolean,
	active: boolean,

	[propName: string]: any,
}

export const Icon: React.FC<IconProps> = ({
											  name = 'sky',
											  className = 'func',
											  size = 'xs',
											  disabled = false,
											  active = false,
											  onClick,
											  ...attrs
										  }) => {

	const onClickAction = () => {
		if (!disabled) onClick();
	};

	const classes = (disabled) ? className + ' disabled' : (active) ? className + ' icon_active' : className;

	const ChooseIcon = (name: string) => {
		switch (name) {
			case 'sky':
				return <FaSkyatlas
					className={[classes, `icon--${size}`].join(' ')}
					onClick={onClickAction}
					{...attrs}
				/>;

			case 'atlas':
				return <FaAtlas
					className={[classes, `icon--${size}`].join(' ')}
					onClick={onClickAction}
					{...attrs}
				/>;

			default:
				return <DiAtom
					className={[classes, `icon--${size}`].join(' ')}
					onClick={onClickAction}
					{...attrs}
				/>;
		}
	};

	return (
		<span>{ChooseIcon(name)}</span>
	);
};

