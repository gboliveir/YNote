import editImg from '../../assets/edit.svg';
import trashCanImg from '../../assets/trashCan.svg';
import bottomArrow from '../../assets/bottomArrow.svg';

import { HeaderStyleComponent, UlStyleComponent, ButtonStyledComponent } from "./style";

export function YouNote() {
    return(
        <>
            <HeaderStyleComponent>
                <h1>YourNote</h1>
            </HeaderStyleComponent>

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