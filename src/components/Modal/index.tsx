import Modal from 'react-modal';
import { FormEvent, MouseEvent } from 'react';
import exitIcon from "../../assets/exit.svg";
import { Container } from './styles';
import { useState } from 'react';

Modal.setAppElement('#root');

interface NoteData {
  title: string,
  content: string
}

interface ModalProps {
  noteCollection: NoteData[],
  setNoteCollection: (note: NoteData[]) => void
  isOpen: boolean,
  onRequestClose: (isOpen: MouseEvent) => void,
}

export function NotepadModal({ 
  isOpen, 
  onRequestClose, 
  noteCollection, 
  setNoteCollection 
}: ModalProps) {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [isActive, setIsActive] = useState('input');

  function handleSubmitForm(e: FormEvent) {
    e.preventDefault();

    if(noteTitle.trim() === '' || noteContent.trim() === '') {
      alert("Preencha os campos vazios");
      return;
    }

    try {
      setNoteCollection([...noteCollection, {
        title: noteTitle,
        content: noteContent
      }]);

      setNoteTitle('');
      setNoteContent('');

      alert('Nota criada com sucesso !');
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
      <Container onSubmit={handleSubmitForm} isActive={isActive}>
        <header>
          <h2>Insira sua nota</h2>
          <img src={exitIcon} alt="Icone de saída" onClick={onRequestClose}/>
        </header>

        <main>
          <div>
            <label htmlFor="title">Título</label>
            <input
              autoFocus
              type="text" 
              name="title" 
              placeholder="Digite o título aqui"
              value={noteTitle}
              onChange={event => {
                setNoteTitle(event.target.value)
                setIsActive('input')}
              }
            />
          </div>

          <div>
            <label htmlFor="content">Conteúdo</label>
            <textarea
              name="content" 
              placeholder="Digite o conteúdo aqui"
              value={noteContent}
              onChange={event => {
                setNoteContent(event.target.value)
                setIsActive('textarea')}
              }
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