import { Container } from "./styles";

const SignIn = () => {
  return (
    <Container>
      <div className="header">
        <img src="" alt="" />
        <h1>Please sign in</h1>
      </div>

      <div className="form">
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <div className="checkbox">
          <input type="checkbox" />
          <span>Remember me</span>
        </div>

        <button className="button">Sign in</button>
      </div>
    </Container>
  );
};

export default SignIn;
