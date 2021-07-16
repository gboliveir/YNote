import styled from "styled-components";
import { transparentize } from "polished";

export const HeaderStyleComponent = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--purple);

    h1 {
        color: white;
        font-size: 3rem;
        margin: 2rem 0;
    }
`;

export const UlStyleComponent = styled.ul`
    position: relative;
    max-width: 1280px;
    margin: 2rem auto 0;
    padding: 0 1rem;
    list-style: none;

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--purple);
        height: 5rem;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

        h2 {
            color: white;
            font-weight: 500;
            margin-left: 1rem;
        }

        img {
            height: 20px;
            width: 20px;
            margin-right: 1rem;
            cursor: pointer;

            transition: opacity 0.2s;

            &:hover {
                opacity: 0.8;
            }
        }
    }
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