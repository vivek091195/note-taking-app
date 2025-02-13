import React from 'react';
import { DividerLine } from './Divider.style.ts';

const Divider: React.FC<{
  orientation?: 'horizontal' | 'vertical';
  styleOverrides?: React.CSSProperties;
}> = ({ orientation = 'horizontal', styleOverrides }) => {
  return <DividerLine orientation={orientation} styleOverrides={styleOverrides} />;
};

export default Divider;
