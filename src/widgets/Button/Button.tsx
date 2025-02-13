import React from 'react';
import { PrimaryButtonStyled, SecondaryButtonStyled } from './Button.style.ts';

const getButtonComponentStyles = (variant?: string) => {
  return variant === 'primary' ? PrimaryButtonStyled : SecondaryButtonStyled;
};

const Button: React.FC<{
  variant?: string;
  onClick: () => void;
  styleOverrides?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ children, variant = 'primary', onClick, styleOverrides }) => {
  const ButtonComponent = getButtonComponentStyles(variant);

  return (
    <ButtonComponent onClick={onClick} styleOverrides={styleOverrides}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
