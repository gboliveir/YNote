import { Header } from './components/Header';
import { Notepad } from './components/Notepad';
import { NotepadModal } from './components/Modal';

import { GlobalStyle, ButtonStyledComponent } from "./global";
import { useState } from 'react';

interface NoteInfoData {
  title: string,
  content: string
}

export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [noteInfo, setNoteInfo] = useState({} as NoteInfoData);

  return (
    <>
      <Header />
      <Notepad />
      <NotepadModal 
        noteInfo={noteInfo} 
        setNoteInfo={setNoteInfo} 
        isOpen={isOpen} 
        onRequestClose={() => setIsOpen(false)}
      />
      <ButtonStyledComponent onClick={() => setIsOpen(true)}>+</ButtonStyledComponent>    
      <GlobalStyle />
    </>
  );
}


