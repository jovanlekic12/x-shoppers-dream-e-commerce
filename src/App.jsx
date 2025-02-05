import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
