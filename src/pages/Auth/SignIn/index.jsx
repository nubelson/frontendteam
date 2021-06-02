import { useState } from "react";
import {
  Avatar,
  FormControl,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from "@material-ui/core";
import { Container, AuthHeader, useStyles } from "./styles";
import { useHistory } from "react-router-dom";

import { data } from "../../../services/api";

const SignIn = () => {
  const { push } = useHistory();
  const styles = useStyles();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleResetForm = () => {
    setEmailValue("");
    setPasswordValue("");
  };

  const handleSubmit = (email, password) => {
    const userExists = data.find((user) => {
      return user.email === email;
    });

    if (userExists) {
      if (userExists.password === password) {
        console.log("Sign in...");
        push("/home");
      } else {
        console.log("Invalid password!");
      }
    } else {
      alert("User not found!");
    }

    handleResetForm();
  };

  return (
    <Container>
      <AuthHeader>
        <Avatar />
        <Typography variant="h2">Please sign in</Typography>
      </AuthHeader>
      <FormControl className="form">
        <TextField
          className={styles.input}
          type="email"
          placeholder="Email address"
          value={emailValue}
          defaultChecked=""
          onChange={(element) => {
            setEmailValue(element.target.value);
          }}
        />
        <TextField
          className={styles.input}
          type="password"
          placeholder="Password"
          value={passwordValue}
          defaultChecked=""
          onChange={(element) => {
            setPasswordValue(element.target.value);
          }}
        />
        <FormControlLabel
          className="checkbox"
          control={<Checkbox />}
          label="Remember me"
          onChange={(element) => {
            console.log(element.target.value);
          }}
        />

        <Button
          onClick={() => {
            handleSubmit(emailValue, passwordValue);
          }}
          className={styles.button}
          variant="contained"
          color="primary"
          fullWidth
          disableElevation
        >
          Sign in
        </Button>
      </FormControl>
    </Container>
  );
};

export default SignIn;
