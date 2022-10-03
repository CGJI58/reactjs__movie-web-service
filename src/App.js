import { useState, useEffect } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("Hi! :)");
    return () => console.log("bye.. :(");
  }, []);
  return <h1>Hello</h1>;
};

function App() {
  const [showing, setShowing] = useState(false);
  const onClickBtn = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClickBtn}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
