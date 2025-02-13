import styled from 'styled-components';
import React from 'react';

export const SearchBar = styled('input')<{
  styleOverrides?: React.CSSProperties;
}>`
  height: 44px;
  padding: 16px;
  color: #717784;
  border-radius: 8px;
  border: 1px solid #cacfd8;

  ${({ styleOverrides }) => (styleOverrides ? { ...styleOverrides } : {})}
`;
