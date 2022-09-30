import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);

  const onClickCounter = () => setValue((prev) => prev + 1);

  console.log("I render everytime...");

  useEffect(() => {
    console.log("Call the API...");
  }, []);

  return (
    <div>
      <button onClick={onClickCounter}>{counter}</button>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
