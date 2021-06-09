import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Header } from "./styles";

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
      <div>
        <div>
          <input type="text" value={searchValue} onChange={myOnChange} />
          <button
            onClick={() => {
              getData(searchValue);
            }}
          >
            {" "}
            {`Search ${searchType}`}{" "}
          </button>
        </div>

        <div>
          {repos.length
            ? repos.map((item) => {
                return (
                  <div key={item.id}>
                    <p> {item.name} </p>
                    <p> {item.description} </p>
                  </div>
                );
              })
            : null}

          {users.length
            ? users.map((user) => {
                return (
                  <div key={user.id}>
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                      src={user.avatar_url}
                      alt={`${user.login} profile`}
                    />
                    <p> {user.login} </p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default App;
