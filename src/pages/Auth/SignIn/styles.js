import styled from "styled-components";
import { makeStyles } from "@material-ui/core";

export const Container = styled.div`
  position: relative;
  background-color: #eeeeee;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form {
    width: 100%;

    .checkbox {
      align-self: center;
    }
  }
`;

export const AuthHeader = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const useStyles = makeStyles({
  input: {},
  button: {},
});
