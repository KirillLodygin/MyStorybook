import React from 'react';
import {GiAnarchy} from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import './chip.sass';

import {Image} from '../Image/Image';

interface IconProps {
	className: string
}

const Icon: React.FC<IconProps> = ({className}) => {
	return <GiAnarchy className={className}/>
};

export interface ChipProps {
	text: string | number,
	withImage: boolean,
	withIcon: boolean,
	withClose: boolean,
	iconName: string;
	imageSrc: string,
	imgAlt: string,
	className: string,
	id: string | number,
	onChipClick: (arg: string | number) => {},
	onCloseClick: (e: React.MouseEvent<HTMLSpanElement>, arg: string | number) => {},

	active: boolean
}

export const Chip: React.FC<ChipProps> = ({
											  text,
											  withImage = false,
											  withIcon = false,
											  withClose = false,
											  iconName = 'chipIcon',
											  imageSrc = 'https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1',
											  imgAlt = '',
											  className = 'chip',
											  onChipClick,
											  onCloseClick,
											  id = '',
											  active = false
										  }) => {
	const onChipClickAction = () => {
		onChipClick(id);
	};

	const onCloseClickAction = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.stopPropagation();
		onCloseClick(e, id);
	};

	return (
		<div className={[className, (active) ? 'chip-active' : ''].join(' ')} onClick={onChipClickAction}>
			{withImage
			&& (
				<span className="chipImage">
          <Image src={imageSrc} alt={imgAlt} width={26} height={26} circle={true} className=''/>
        </span>
			)
			}
			{withIcon
			&& (
				<span className="chipIcon">
          <Icon className={iconName}/>
        </span>
			)
			}
			<span className="chipText">{text}</span>
			{withClose
			&& (
				<span className="chipClose" onClick={onCloseClickAction}>
          <AiFillCloseCircle className={iconName}/>
        </span>
			)
			}
		</div>
	);
};