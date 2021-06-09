import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 1rem 5rem;
  background-color: red;

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

export const Container = styled.main`
  width: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 20rem;
  padding: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.div`
  h1 {
  }

  p {
  }
`;

export const Form = styled.div``;

export const Content = styled.div`
  width: 100%;
  background-color: #c9c9c9;
  height: 100%;

  padding: 5rem;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
`;
