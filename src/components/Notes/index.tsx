import React from 'react';
import Header from '../Header/Header.tsx';
import Divider from '../../widgets/Divider/Divider.tsx';
import { AllNotesWrapper, NotesSection } from './Notes.style.ts';
import CreateNote from './CreateNote.tsx';
import ExistingNotes from './ExistingNotes.tsx';

const Index = () => {
  return (
    <AllNotesWrapper>
      <Header />
      <Divider
        orientation={'horizontal'}
        styleOverrides={{
          position: 'absolute',
          top: '80px',
          left: 0,
        }}
      />
      <NotesSection>
        <ExistingNotes />
        <Divider orientation={'vertical'} />
        <CreateNote />
      </NotesSection>
    </AllNotesWrapper>
  );
};

export default Index;
