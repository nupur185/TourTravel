import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router";
import TopHeader from "./Components/TopHeader";
import Home from "./Components/Home";
import './App.css';
import HomeFooter from "./Components/HomeFooter";
import EachcardDetail from "./Components/EachcardDetail";
import FilteredCards from "./Components/FilteredCards"

function App() {
    return (
      <BrowserRouter>
        <TopHeader />
        <div className="pt-20.5 bg-[#fafcff]">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/activity/:type" element={<FilteredCards/>}></Route>
          <Route path="/detail/:id" element={<EachcardDetail/>}></Route>
          {/* <Route path="/activity/:city" element={<FilteredCards/>}></Route> */}
          <Route path="/activity/:winter" element={<FilteredCards/>}></Route>
          <Route path="/activity/:summer" element={<FilteredCards/>}></Route>
        </Routes>
        </div>
        <HomeFooter />
      </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
