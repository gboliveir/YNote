import styled from "styled-components";
import { transparentize } from "polished";

export const UlStyleComponent = styled.ul`
    position: relative;
    max-width: 1280px;
    margin: 2rem auto 0;
    padding: 0 1rem;
    list-style: none;
`;

export const ButtonStyledComponent = styled.button`
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    height: 4rem;
    width: 4rem;
    
    border: none;
    border-radius: 50%;
    
    background: var(--purple);
    color: white;
    
    font-weight: 500;
    font-size: 2rem;

    transition: background-color 0.2s;

    &:hover {
        background-color: ${transparentize(0.2, '#4B0082')};
    }
`;