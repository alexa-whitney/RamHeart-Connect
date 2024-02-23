import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/searchConditionSlice';

const SearchConditionsInput = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input type="text" onChange={handleInputChange} placeholder="Search medical conditions" />
  );
};

export default SearchConditionsInput;
