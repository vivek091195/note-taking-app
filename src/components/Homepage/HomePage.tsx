import React from 'react';
import { HomePageWrapper, PageContent, SidebarContainer } from './HomePage.style.ts';
import Sidebar from '../Navigation/Sidebar/Sidebar.tsx';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <PageContent></PageContent>
    </HomePageWrapper>
  );
};

export default HomePage;
