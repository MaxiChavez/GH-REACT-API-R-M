import { Header } from "./common/Header/Header";

import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>{/* X */}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
