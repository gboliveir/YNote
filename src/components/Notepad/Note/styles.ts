import styled from "styled-components";

export const LiStyleComponent = styled.li`
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

`;