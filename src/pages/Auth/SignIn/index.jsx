import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { useAuth } from "../../../hooks";
import { AuthHeader, Container, useStyles } from "./styles";

const SignIn = () => {
  const { signIn } = useAuth();
  const styles = useStyles();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleResetForm = () => {
    setEmailValue("");
    setPasswordValue("");
  };

  const handleSubmit = (email, password) => {
    signIn(email, password);

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
