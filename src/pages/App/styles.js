import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 1rem 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .searchTypes {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    p {
      cursor: pointer;
    }
  }
`;
