import { StyledCard, CardHeader, CardContainer } from "./styles";

const imageUrl =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

const Repos = ({ data }) => {
  return (
    <StyledCard>
      <CardHeader>
        <img src={imageUrl} alt="Repository cover" />
      </CardHeader>

      <CardContainer>
        <h3> {data.name} </h3>
        <div className="repoData">
          <p> {data.owner.login} </p>
          <p> {data.language} </p>
        </div>
        <p> {data.description} </p>

        <div className="actionGroup">
          <button
            onClick={() => {
              console.log(`View repo ${data.id}`);
            }}
          >
            View
          </button>
          <button
            onClick={() => {
              console.log(`Star repo ${data.id}`);
            }}
          >
            Star
          </button>
        </div>
      </CardContainer>
    </StyledCard>
  );
};

const Users = ({ data }) => {
  return (
    <StyledCard>
      <CardHeader>
        <img
          className="profileImage"
          src={data.avatar_url}
          alt={`${data.login} profile`}
        />
      </CardHeader>
      <CardContainer>
        <h3> {data.login} </h3>

        <div className="actionGroup">
          <button
            onClick={() => {
              console.log(`View user ${data.id}`);
            }}
          >
            View
          </button>
          <button
            onClick={() => {
              console.log(`Follow user ${data.id}`);
            }}
          >
            Follow
          </button>
        </div>
      </CardContainer>
    </StyledCard>
  );
};

const Cards = {
  Repos,
  Users,
};

export default Cards;
