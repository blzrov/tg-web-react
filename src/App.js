import React, { useEffect } from "react";
import useTelegram from "./hooks/useTelegram";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
      <Header />
    </div>
  );
}

export default App;
