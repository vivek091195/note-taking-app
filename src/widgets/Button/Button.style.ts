import styled from 'styled-components';
import React from 'react';

export const PrimaryButtonStyled = styled.button<{
  styleOverrides?: React.CSSProperties;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #335cff;
  color: #fff;
  font-size: 14px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  height: 40px;
  cursor: pointer;

  ${({ styleOverrides }) => (styleOverrides ? { ...styleOverrides } : {})}
`;

export const SecondaryButtonStyled = styled.button<{
  styleOverrides?: React.CSSProperties;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f5f8;
  color: #525866;
  font-size: 14px;
  padding: 16px;
  border-radius: 8px;
  height: 40px;
  cursor: pointer;

  ${({ styleOverrides }) => (styleOverrides ? { ...styleOverrides } : {})}
`;
