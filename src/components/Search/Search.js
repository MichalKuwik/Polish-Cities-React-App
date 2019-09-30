import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import {SearchWrapper,Input,Label,FormItemBar} from './SearchStyled';

const Search = ({filter,value,resetFn}) => {
  return(
    <SearchWrapper>
      <Input
        autoComplete="off" 
        type="text"
        id="name"
        onChange={filter}
        value={value}
        placeholder=" "
      />
      <Label htmlFor="name">
          Wpisz nazwę miasta
      </Label>
      <FormItemBar/>
      {value !== '' ? <Button resetFn={resetFn}/> : null}
    </SearchWrapper>
  )
}

Search.propTypes = {
  filter:PropTypes.func.isRequired,
  value:PropTypes.string.isRequired,
  resetFn:PropTypes.func.isRequired
}

export default Search;