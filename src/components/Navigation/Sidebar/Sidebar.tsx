import React from 'react';
import {
  SidebarIconWrapper,
  SidebarItemWrapper,
  SidebarTitleWrapper,
  SidebarWrapper,
  TopItemsWrapper,
} from './Sidebar.style.ts';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { ReactComponent as HomeIcon } from '../../../assets/images/icon-home.svg';
import { ReactComponent as ArchiveIcon } from '../../../assets/images/icon-archive.svg';
import Divider from '../../Divider/Divider.tsx';

const SidebarItem: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => {
  return (
    <SidebarItemWrapper>
      <SidebarIconWrapper>{icon}</SidebarIconWrapper>
      <SidebarTitleWrapper>{title}</SidebarTitleWrapper>
    </SidebarItemWrapper>
  );
};

const TopItems = () => (
  <TopItemsWrapper>
    <SidebarItem icon={<HomeIcon />} title="All Notes" />
    <SidebarItem icon={<ArchiveIcon />} title="Archived Notes" />
  </TopItemsWrapper>
);

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo />
      <TopItems />
      <Divider />
      {/*<TagItems />*/}
    </SidebarWrapper>
  );
};

export default Sidebar;
