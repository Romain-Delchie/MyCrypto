import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import Defi from "./Defi/Defi";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Defi} />
      <Route path="/mon-pf" Component={Home} />
    </Routes>
  );
}

export default App;
