import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router";
import TopHeader from "./Components/TopHeader";
import Home from "./Components/Home";
import './App.css';
import HomeFooter from "./Components/HomeFooter";
import EachcardDetail from "./Components/EachcardDetail";
import FilteredCards from "./Components/FilteredCards"
import { ToursProvider } from "./Components/SeasonToursContext";
import AllCards from "./Components/AllCards";

function App() {
    return (
      <BrowserRouter>
        <ToursProvider>
        <TopHeader />
        <div className="pt-20.5 bg-[#fafcff]">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/allCards" element={<AllCards/>}></Route>
          <Route path="/activity/:type" element={<FilteredCards/>}></Route>
          <Route path="/detail/:id" element={<EachcardDetail/>}></Route>
          <Route path="/activity/:winter" element={<FilteredCards/>}></Route>
          <Route path="/activity/:summer" element={<FilteredCards/>}></Route>
        </Routes>
        </div>
        <HomeFooter />
        </ToursProvider>
      </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
