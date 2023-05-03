import React from 'react';
import './Main.css';
import { HornedBeast } from '../HornedBeast/HornedBeast';

// JSON Data
const beasts = require('../../data/beasts.json');

export const Main = () => {
	// console.log(beasts);
	return (
		<div className="main-container">
			<div className="beasts-container">
				{beasts.map((beast) => (
					<div key={beast._id} className="beast">
						<HornedBeast
							title={beast.title}
							image_url={beast.image_url}
							horns={beast.horns}
							keyword={beast.keyword}
							description={beast.description}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
