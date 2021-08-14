import styled from "styled-components";

export const Container = styled.form`
  width: 50rem;
  background-color: white; 
  padding: 1.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
      border: 1px solid var(--purple);
      cursor: pointer;
      transition: .2s;

      &:hover {
        background-color: #f0f0f0;
      }
    }

    h2 {
      font-size: 2rem;
      color: var(--purple);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;

    label {
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
      font-weight: 500;
    }

    input, textarea {
      position: relative;
      height: 3rem;
      border: none;
      background-color: #f0f0f0;
      padding: 0 1rem;
      font-size: 1rem;
      outline: none;
      border-radius: .25rem;

      &.active {
        color: var(--purple);
      }

      &.active::after {
        content: '';
        height: 3px;
        width: 100%;
        border-radius: 3px 3px 0 0;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: var(--yellow-500);
      }
    }

    textarea {
      height: 15rem;
      resize: vertical;
      padding: 1rem;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto 1rem;
    min-width: 250px;
    min-height: 3.5rem;
    border: none;
    background-color: var(--purple);
    color: white;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
  
`;