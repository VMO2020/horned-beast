import React, { useState } from 'react';
import './HornedBeast.css';
import { Modal } from '../Modal/Modal';

export const HornedBeast = ({
	title,
	image_url,
	horns,
	keyword,
	description,
}) => {
	const [votes, setVotes] = useState(1);
	const [modal, setModal] = useState(false);

	// Display MODAl
	const handleModal = () => {
		setModal(!modal);
	};

	// Clicks
	const handleClick = () => {
		setVotes(votes + 1);
	};

	return (
		<div>
			<h3>{title}</h3>
			<p>
				Horns: <span>{`${horns}`} </span>
			</p>
			<p>
				Keyword: <span>{`${keyword}`} </span>
			</p>
			<img src={image_url} alt={keyword} title={title} onClick={handleModal} />
			<p className="description">
				<span>{description}.</span>
			</p>
			<p onClick={handleClick}>❤️ = {votes}</p>
			{modal && (
				<Modal
					handleModal={handleModal}
					image_url={image_url}
					title={title}
					description={description}
				/>
			)}
		</div>
	);
};
