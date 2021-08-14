import Modal from 'react-modal';
import { FormEvent, MouseEvent } from 'react';
import exitIcon from "../../assets/exit.svg";
import { Container } from './styles';
import { useState } from 'react';

Modal.setAppElement('#root');

interface NoteInfoData {
  title: string,
  content: string
}

interface ModalProps {
  noteInfo: NoteInfoData,
  setNoteInfo: (note: NoteInfoData) => void
  isOpen: boolean,
  onRequestClose: (isOpen: MouseEvent) => void,
}

export function NotepadModal({ isOpen, onRequestClose, noteInfo, setNoteInfo }: ModalProps) {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  function handleSubmitForm(e: FormEvent) {
    e.preventDefault();

    if(noteTitle.trim() === '' || noteContent.trim() === '') {
      alert("Preencha os campos vazios");
      return;
    }

    try {
      setNoteInfo(
        {
          title: noteTitle,
          content: noteContent
        }
      );
    } catch {
      throw Object.assign(
        new Error("Valores invalidos"),
        { code: 404 }
      );
    }
  }

  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleSubmitForm}>
        <header>
          <h2>Insira sua nota</h2>
          <img src={exitIcon} alt="Icone de saída" onClick={onRequestClose}/>
        </header>

        <main>
          <div>
            <label htmlFor="title">Título</label>
            <input 
              type="text" 
              name="title" 
              placeholder="Digite o título aqui"
              value={noteTitle}
              onChange={event => setNoteTitle(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="content">Conteúdo</label>
            <textarea 
              name="content" 
              placeholder="Digite o conteúdo aqui"
              value={noteContent}
              onChange={event => setNoteContent(event.target.value)}  
            />
          </div>
        </main>

        <footer>
          <button type="submit">Criar</button>
        </footer>
      </Container>
    </Modal>
  );
}