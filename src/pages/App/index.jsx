import { useAuth } from "../../hooks";

const App = () => {
  const { signOut } = useAuth();

  return (
    <div>
      <h1>This is my app</h1>

      <button onClick={signOut}>Logout</button>
    </div>
  );
};

export default App;
