import { UlStyleComponent, ButtonStyledComponent } from "./styles";

import editImg from '../../assets/edit.svg';
import trashCanImg from '../../assets/trashCan.svg';
import bottomArrow from '../../assets/bottomArrow.svg';

export function Notepad() {
    return(
        <>
            <UlStyleComponent>
                <li>
                    <h2>Lista de compras</h2>
                    <div>
                        <img src={editImg} alt="" />
                        <img src={bottomArrow} alt="" />
                        <img src={trashCanImg} alt="" />
                    </div>
                </li>
            </UlStyleComponent>

            <ButtonStyledComponent type="button">+</ButtonStyledComponent>
        </>
    );
}