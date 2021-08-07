import editImg from '../../../assets/edit.svg';
import trashCanImg from '../../../assets/trashCan.svg';
import bottomArrow from '../../../assets/bottomArrow.svg';

import { LiStyleComponent } from "./styles";

export function Note() {
  return(
    <LiStyleComponent>
      <h2>Lista de compras</h2>
      <div>
          <img src={editImg} alt="Icone para editar nota" />
          <img src={bottomArrow} alt="Icone para abrir nota" />
          <img src={trashCanImg} alt="Icone para excluir nota" />
      </div>
    </LiStyleComponent>
  );
}