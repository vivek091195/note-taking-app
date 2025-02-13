import styled, { css } from 'styled-components';
import React from 'react';

export const DividerLine = styled.div<{
  orientation?: 'horizontal' | 'vertical';
  styleOverrides?: React.CSSProperties;
}>`
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          width: 100%;
          height: 1px;
          background-color: #e0e4ea;
        `
      : css`
          height: 100%;
          width: 1px;
          background-color: #e0e4ea;
        `}

  ${({ styleOverrides }) => (styleOverrides ? { ...styleOverrides } : {})};
`;
