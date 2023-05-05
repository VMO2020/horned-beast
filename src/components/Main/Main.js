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
	const [message, setMessage] = useState('');
	const [option, setOption] = useState('horns');

	// SEARCH FUNCTION
	const searcher = (e) => {
		setSearch(e.target.value);
		// console.log(e.target.value);
	};

	// FILTER by horns
	const handleFilter = () => {
		const filterData = data.filter(
			(value) => value.horns.toString() === search.toString()
		);
		// console.log(filterData);
		setDataFiltered(filterData);
		setBtnReset(true);

		if (filterData.length < 1) {
			setMessage(`Horned beast does not exist with ${search} horns`);
		}
	};

	// FILTER by title
	const handleFilter2 = () => {
		const filterData = data.filter((value) => {
			return value.title.toLowerCase().includes(search.toLowerCase());
		});
		// console.log(filterData);
		setDataFiltered(filterData);
		setBtnReset(true);
		if (filterData.length < 1) {
			setMessage(`Horned beast does not exist with ${search} name`);
		}
	};

	// FILTER by description
	const handleFilter3 = () => {
		const filterData = data.filter((value) => {
			return value.description.toLowerCase().includes(search.toLowerCase());
		});
		// console.log(filterData);
		setDataFiltered(filterData);
		setBtnReset(true);
		if (filterData.length < 1) {
			setMessage(`Horned beast does not exist with ${search} description`);
		}
	};

	// OPTIONS
	const handleOptions = (e) => {
		setOption(e.target.value);
		console.log(e.target.value);
	};

	// RESET
	const Reset = () => {
		setSearch('');
		setBtnReset(false);
		setDataFiltered(data);
		setMessage('');
	};

	return (
		<main className="main-container" id="top">
			<div className="filter-container">
				<label htmlFor="options">Filter options: </label>
				<select id="options" onChange={handleOptions}>
					<option value="horns"># horns</option>
					<option value="title">name</option>
					<option value="description">description</option>
				</select>

				<input
					value={search}
					onChange={searcher}
					type="text"
					placeholder="Add search parameter..."
					className="search"
				/>

				{!btnReset && option === 'horns' && (
					<button className="btn" onClick={handleFilter}>
						Filter by horns
					</button>
				)}

				{!btnReset && option === 'title' && (
					<button className="btn" onClick={handleFilter2}>
						Filter by name
					</button>
				)}

				{!btnReset && option === 'description' && (
					<button className="btn" onClick={handleFilter3}>
						Filter by description
					</button>
				)}

				{btnReset && (
					<button className="btn" onClick={Reset} style={{ color: 'red' }}>
						Reset
					</button>
				)}
			</div>
			<h2 className="message">{message}</h2>
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
		</main>
	);
};
