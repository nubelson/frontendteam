import { useState } from "react";
import { api } from "../../services/api";
import {
  Header,
  Container,
  SearchContainer,
  Heading,
  Form,
  Content,
  ContentWrapper,
} from "./styles";

import Cards from "../../components/Cards";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [users, setUsers] = useState([]);

  const [searchType, setSearchType] = useState("repositories");
  const [searchValue, setSearchValue] = useState("");

  const myOnChange = (event) => {
    setSearchValue(event.target.value);
  };

  const getData = async (data) => {
    const response = await api.get(`/${searchType}`, {
      params: {
        q: data,
      },
    });

    if (searchType === "repositories") {
      setRepos(response.data.items);
      setUsers([]);
    }

    if (searchType === "users") {
      setUsers(response.data.items);
      setRepos([]);
    }
  };

  return (
    <>
      <Header>
        <p>Logo</p>

        <div className="searchTypes">
          <p
            onClick={() => {
              setSearchType("repositories");
            }}
          >
            Repos
          </p>
          <p
            onClick={() => {
              setSearchType("users");
            }}
          >
            Users
          </p>
        </div>
      </Header>
      <Container>
        <SearchContainer>
          <Heading>
            <h1>
              Search Github {searchType === "repositories" ? "Repos" : "Users"}
            </h1>
            <p>
              Search for Github{" "}
              {searchType === "repositories" ? "repos" : "users"} using the
              following form
            </p>
          </Heading>
          <Form>
            <input type="text" value={searchValue} onChange={myOnChange} />
            <button
              onClick={() => {
                getData(searchValue);
              }}
            >
              Search
            </button>
            <button
              onClick={() => {
                setRepos([]);
                setUsers([]);
              }}
            >
              Clear
            </button>
          </Form>
        </SearchContainer>

        <Content>
          <ContentWrapper>
            {(repos.length &&
              repos.map((item) => {
                return <Cards.Repos key={item.id} data={item} />;
              })) ||
              null}

            {(users.length &&
              users.map((user) => {
                return <Cards.Users key={user.id} data={user} />;
              })) ||
              null}
          </ContentWrapper>
        </Content>
      </Container>
    </>
  );
};

export default App;
