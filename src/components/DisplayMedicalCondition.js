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
		<div className="resources-section">
			<div className="search-container">
				<SearchConditionsInput />
				<button
					className="search-button"
					onClick={handleSearch}
					disabled={!searchTerm || status === 'loading'}
				>
					Search
				</button>
			</div>
			{error && <p className="error-message">{error}</p>}
			{status === 'loading' && <p>Loading...</p>}
			<div className="results-grid">
				{results.map((result, index) => (
					<div key={index} className="card">
						<div className="card-content">
							<h3 className="card-title">{result.name}</h3>
							{result.links && (
								<div className="card-links">
									{result.links.map((link, linkIndex) => (
										<a key={linkIndex} href={link[0]} target="_blank" rel="noopener noreferrer" className="card-link">
											{link[1]}
										</a>
									))}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default DisplayMedicalCondition;