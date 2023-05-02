import React from 'react';
import './Main.css';
import { data } from '../../data/data';
import { HornedBeast } from '../HornedBeast/HornedBeast';

export const Main = () => {
	// console.log(data);
	return (
		<div className="main-container">
			<div className="beasts-container">
				{data.map((beast) => (
					<HornedBeast
						id={beast.id}
						title={beast.title}
						image_url={beast.image_url}
						horns={beast.horns}
						keyword={beast.keyword}
						description={beast.description}
					/>
				))}
			</div>
		</div>
	);
};
