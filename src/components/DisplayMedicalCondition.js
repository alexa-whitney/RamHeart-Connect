import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchConditions } from '../features/searchConditionSlice';
import SearchConditionsInput from './SearchConditionsInput';

const DisplayMedicalCondition = () => {
	const dispatch = useDispatch();
	const { searchTerm, results, error, status } = useSelector((state) => state.search);

	const handleSearch = (e) => {
		e.preventDefault();
		dispatch(fetchConditions(searchTerm));
	};

	return (
		<div>
			<SearchConditionsInput />
			<button onClick={handleSearch} disabled={!searchTerm || status === 'loading'}>
				Search
			</button>
			{error && <p>{error}</p>}
			{status === 'loading' && <p>Loading...</p>}
			<ul>
				{results.map((result, index) => (
					<li key={index}>
						<p>{result.name}</p>
						{result.links && (
							<ul>
								{result.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<a href={link[0]} target="_blank" rel="noopener noreferrer">
											{link[1]}
										</a>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default DisplayMedicalCondition;