import React, { useState } from 'react';
import './Main.css';
import { HornedBeast } from '../HornedBeast/HornedBeast';

// JSON Data
import data from '../../data/beasts.json';

export const Main = () => {
	// console.log(data);

	const [search, setSearch] = useState('');
	const [dataFiltered, setDataFiltered] = useState(data);
	const [btnReset, setBtnReset] = useState(false);

	// SEARCH FUNCTION
	const searcher = (e) => {
		setSearch(e.target.value);
		// console.log(e.target.value);
	};

	// FILTER
	const handleFilter = () => {
		const filterData = data.filter(
			(value) => value.horns.toString() === search.toString()
		);
		// console.log(filterData);
		setDataFiltered(filterData);
		setBtnReset(true);
	};

	// RESET
	const Reset = () => {
		setSearch('');
		setBtnReset(false);
		setDataFiltered(data);
	};

	return (
		<div className="main-container">
			<div className="filter-container">
				<input
					value={search}
					onChange={searcher}
					type="text"
					placeholder="Add number of horns..."
					className="search"
				/>
				{btnReset ? (
					<button className="btn" onClick={Reset}>
						Reset
					</button>
				) : (
					<button className="btn" onClick={handleFilter}>
						Filter
					</button>
				)}
			</div>
			<div className="beasts-container">
				{dataFiltered.map((beast) => (
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
