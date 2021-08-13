import { Header } from './components/Header';
import { Notepad } from './components/Notepad';
import Modal from 'react-modal';

import { GlobalStyle, ButtonStyledComponent } from "./styles/global";
import { useState } from 'react';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);


  return (
    <>
      <Header />

      <Notepad />

      <Modal 
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />

      <ButtonStyledComponent onClick={() => setIsModalOpen(true)}type="button">+</ButtonStyledComponent>    
    
      <GlobalStyle />
    </>
  );
}


