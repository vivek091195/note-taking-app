import React from 'react';
import { HeaderActions, HeaderTitle, HeaderWrapper } from './Header.style.ts';
import { ReactComponent as Settings } from '../../assets/images/icon-settings.svg';
import Search from '../../widgets/Search/Search.tsx';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>All Notes</HeaderTitle>
      <HeaderActions>
        <Search
          onChange={() => {}}
          styleOverrides={{ marginRight: 24, width: 300 }}
          placeholder={'Search by title, content, or tags…'}
        />
        <Settings />
      </HeaderActions>
    </HeaderWrapper>
  );
};

export default Header;
