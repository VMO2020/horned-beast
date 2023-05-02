import React from 'react';
import './HornedBeast.css';

export const HornedBeast = ({
	id,
	title,
	image_url,
	horns,
	keyword,
	description,
}) => {
	return (
		<div key={id} className="beast">
			<h3>{title}</h3>
			<p>
				Horns: <span>{`${horns}`} </span>
			</p>
			<p>
				Keyword: <span>{`${keyword}`} </span>
			</p>
			<img src={image_url} alt={title} />
			<p className="description">
				<span>{description}.</span>
			</p>
		</div>
	);
};
