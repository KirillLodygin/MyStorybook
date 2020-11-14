import React from 'react';
import {BsFillEnvelopeOpenFill} from "react-icons/bs";
import './badge.sass';

interface IconProps {
	className: string
}

const Icon: React.FC<IconProps> = ({className}) => {
	return <BsFillEnvelopeOpenFill className={className}/>
};

export interface BadgeProps {
	value: string | number,
	circle: boolean,
	className: string,
	inline: boolean,
	outer: boolean,
	iconName: string,
	buttonName: string

	[propName: string]: any
}

export const Badge: React.FC<BadgeProps> = ({
												iconName = 'badgeIcon',
												buttonName = 'badgeButton',
												value,
												className = 'badge',
												circle = false,
												inline = false,
												outer = false,
												...attrs
											}) => {

	return (
		<button className={buttonName}>
			<Icon className={[iconName,
				(inline) ? 'large' : ''
			].join(' ')}/>
			<span
				className={[className,
					(!value) ? 'badge_display' : '',
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
		</button>
	);
};