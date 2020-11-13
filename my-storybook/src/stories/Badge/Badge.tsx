import React from 'react';
import {BsFillEnvelopeOpenFill} from "react-icons/bs";
import './badge.sass';

interface IconProps {
	className: string
}

const Icon: React.FC<IconProps> = ({className}) => {
	return <BsFillEnvelopeOpenFill className={className}/>
};

interface ButtonProps {
	className: string
}

const Button: React.FC<ButtonProps> = ({className}) => {
	return <Button className={className}/>
};

export interface BadgeProps {
	value: string | number,
	circle: boolean,
	className: string,
	inline: boolean,
	outer: boolean,
	iconName: 'badgeIcon',
	buttonName: 'badgeButton',

	[propName: string]: any
}

export const Badge: React.FC<BadgeProps> = ({
												buttonName,
												iconName,
												value,
												className = 'badge',
												circle = false,
												inline = false,
												outer = false,
												...attrs
											}) => {

	return (
		<Button className={buttonName}>
			<Icon className={iconName}/>
			<span
				className = {[className,
					(typeof value === 'string') ? 'text' : '',
					(circle) ? 'badge_circle' : '',
					(inline) ? 'inline' : '',
					(outer) ? 'outer' : '',
					(attrs.warning) ? 'warning' : '',
					(attrs.alert) ? 'alert' : '',
					(attrs.success) ? 'success' : '',
					(attrs.info) ? 'info' : ''
				].join(' ')}
				{...attrs}
			>
				{value}
			</span>
		</Button>
	);
};