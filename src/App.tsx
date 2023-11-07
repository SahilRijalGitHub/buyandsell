import "./styles/App.css";
import TopBar from "./components/TopBar";
import SecondBar from "./components/SecondBar";
import Home from "./pages/Home";
import BasketPage from "./pages/BasketPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container" id="top-bar-container">
        <TopBar></TopBar>
      </div>
      <div className="container" id="second-bar-container">
        <SecondBar></SecondBar>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/basket" element={<BasketPage></BasketPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
