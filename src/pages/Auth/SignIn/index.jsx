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
import { AuthHeader, Container } from "./styles";
import * as Yup from "yup";

const SignIn = () => {
  const { signIn } = useAuth();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSubmit = async (email, password) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("This filed must be an valid email!")
          .required(),
        password: Yup.string()
          .min(8, "This field must have at least 8 char...")
          .required(),
      });

      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        }
      );

      signIn(email, password);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // Validation failed
        console.log(err);
      }
    }
  };

  return (
    <Container>
      <AuthHeader>
        <Avatar />
        <Typography variant="h2">Please sign in</Typography>
      </AuthHeader>
      <FormControl className="form">
        <TextField
          type="email"
          placeholder="Email address"
          value={emailValue}
          defaultChecked=""
          onChange={(element) => {
            setEmailValue(element.target.value);
          }}
        />
        <TextField
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
