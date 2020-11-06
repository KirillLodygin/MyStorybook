import React from 'react';
import './button.sass';

export interface ButtonProps {
	label: string | number,
	onClick: () => void,
	className: string,
	disabled: boolean,
	active: boolean,

	[propName: string]: any,
}

export const Button: React.FC<ButtonProps> = ({
												  label = 'Default button',
												  className = 'btn',
												  disabled = false,
												  active = false,
												  onClick,
												  ...attrs
											  }) => {


	const onClickAction = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (disabled) {
			e.preventDefault();
		} else {
			onClick();
		}
	};

	const classes = (active && !disabled) ? className + ' active' : className;

	return (
		<button
			className={classes}
			disabled={disabled}
			onClick={onClickAction}
			{...attrs}
		>
			{label}
		</button>
	);
};