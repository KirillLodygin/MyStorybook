import React from 'react';
import './buttonGroup.sass';

import {Button} from '../Button/Button';

export interface ButtonGroupProps {
	className: string,
	vertical: boolean,
	buttons: Array<string>,
	switchOn: boolean,
	onClick: () => void

	[propName: string]: any,
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
															className = 'btn-group',
															vertical = false,
															buttons,
															switchOn = true,
															onClick,
															...attrs
														}) => {
	const classes = (vertical) ? className + ' vertical' : className;

	const buttonsArr = buttons.map((item, i) => {
		let active = (item === 'ON') ? switchOn :
			(item === 'OFF') ? !switchOn :
				(i === 1);

		return <Button
			key={item}
			label={item}
			onClick={onClick}
			className={'btn'}
			disabled={false}
			active={active}
		/>;
	});

	return(
		<div
			className={classes}
			{...attrs}
		>
			{buttonsArr}
		</div>
	)
};