import React, { useState } from 'react';
import './HornedBeast.css';

export const HornedBeast = ({
	title,
	image_url,
	horns,
	keyword,
	description,
}) => {
	const [votes, setVotes] = useState(1);

	const handleClick = () => {
		setVotes(votes + 1);
	};

	return (
		<>
			<h3>{title}</h3>
			<p>
				Horns: <span>{`${horns}`} </span>
			</p>
			<p>
				Keyword: <span>{`${keyword}`} </span>
			</p>
			<img src={image_url} alt={keyword} title={title} />
			<p className="description">
				<span>{description}.</span>
			</p>
			<p onClick={handleClick}>❤️ = {votes}</p>
		</>
	);
};
