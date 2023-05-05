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
	const [votes, setVotes] = useState(0);
	const [modal, setModal] = useState(false);

	// Display MODAl
	const handleModal = () => {
		setModal(!modal);
	};

	// Clicks
	const handleClick = () => {
		setVotes(votes + 1);
	};

	const handleClick2 = () => {
		setVotes(votes - 1);
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
			<div className="likes-container">
				<p onClick={handleClick}>👍</p>
				<p onClick={handleClick2}>👎</p>
				{votes < 0 ? (
					<p style={{ color: 'red' }}>
						<span>love = </span>
						{votes}
					</p>
				) : (
					<p className="votes">
						<span>love = </span>
						{votes}
					</p>
				)}
			</div>
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
