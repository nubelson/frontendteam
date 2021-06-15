import { useState, useEffect } from "react";
import { StyledCard, CardHeader, CardContainer } from "./styles";
import { useAuth } from "../../hooks";

const Repos = ({ data }) => {
  const { starRepo, user, favoriteRepos } = useAuth();
  const [isStared, setIsStared] = useState(false);

  useEffect(() => {
    if (favoriteRepos.has(data.id)) {
      if (favoriteRepos.get(data.id)) {
        setIsStared(true);
      } else {
        setIsStared(false);
      }
    }
  }, [favoriteRepos]);

  return (
    <StyledCard>
      <CardHeader>
        <img src={data.owner.avatar_url} alt="Repository cover" />
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
              starRepo(user.email, data.id);
            }}
          >
            {isStared ? "Unstar" : "Star"}
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
