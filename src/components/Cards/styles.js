import styled from "styled-components";

export const StyledCard = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: #fff;
  -webkit-box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.32);
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.32);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profileImage {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 50%;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h3 {
    font-size: 2rem;
  }

  & > p {
    font-style: italic;
  }

  .repoData {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    & > :first-child {
      text-decoration: underline;
    }

    & > :last-child {
      color: #c9c9c9;
      font-weight: bold;
    }
  }

  .actionGroup {
    display: flex;
    align-items: center;

    button {
      padding: 0.5rem;
    }
  }
`;
