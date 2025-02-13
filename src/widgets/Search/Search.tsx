import React from 'react';
import { SearchBar } from './Search.style.ts';

const Search: React.FC<{
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  styleOverrides?: React.CSSProperties;
}> = ({ placeholder, onChange, disabled = false, styleOverrides }) => {
  return (
    <SearchBar
      type={'text'}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      styleOverrides={styleOverrides}
    />
  );
};

export default Search;
