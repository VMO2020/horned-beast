import React from 'react';
import './Modal.css';

export const Modal = ({ handleModal, image_url, title, description }) => {
	return (
		<div className="modal">
			<img src={image_url} alt={title} onClick={handleModal} />
			<h3>{title}</h3>
			<h3 className="description">{description}</h3>
		</div>
	);
};
