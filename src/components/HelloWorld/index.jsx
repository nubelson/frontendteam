import "./styles.css";

const HelloWorld = (props) => {
  return (
    <div className="container">
      <p className="text">
        Hello World! My name is <strong>{props.name}</strong> and this is my
        first React App!
      </p>
    </div>
  );
};

export default HelloWorld;
