import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
    </Routes>
  );
}

export default App;
