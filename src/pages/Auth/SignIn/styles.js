import styled from "styled-components";

export const Container = styled.div`
  background-color: #eeeeee;
  padding: 6rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header {
    margin-bottom: 2rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.2rem;
    }

    .button {
      width: 100%;
      margin-top: 3rem;
    }
  }
`;
