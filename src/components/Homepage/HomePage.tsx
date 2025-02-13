import React from 'react';
import { ContentContainer, HomePageWrapper, SidebarContainer } from './HomePage.style.ts';
import Sidebar from '../Navigation/Sidebar/Sidebar.tsx';
import Divider from '../../widgets/Divider/Divider.tsx';
import Index from '../Notes';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Divider
        orientation={'vertical'}
        styleOverrides={{
          position: 'absolute',
          top: 0,
          left: '20%',
        }}
      />
      <ContentContainer>
        <Index />
      </ContentContainer>
    </HomePageWrapper>
  );
};

export default HomePage;
