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
import { BookingProvider } from "./Components/BookingContext";
import Mybooking from "./Components/Mybooking";
import { FormProvider } from "./Components/FormContext";
import TripForm from "./Components/TripForm";
import PlannedTrip from "./Components/PlannedTrip";
import FAQ from "./Components/Faq";
import About from "./Components/about";
import TandC from "./Components/TandC";

function App() {
    return (
      <BookingProvider className="w-full">
      <BrowserRouter>
        <ToursProvider>
          <FormProvider>
            <TopHeader />
            <TripForm />
        <div className="pt-20.5 bg-[#fafcff]">
        
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/allCards" element={<AllCards/>}></Route>
          <Route path="/activity/:type" element={<FilteredCards/>}></Route>
          <Route path="/detail/:id" element={<EachcardDetail/>}></Route>
          <Route path="/mybookings" element={<Mybooking/>}></Route>
          <Route path="/results" element={<PlannedTrip></PlannedTrip>}> </Route>
          <Route path="/faq" element={<FAQ/>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/tandc" element={<TandC />}></Route>
        </Routes>
        </div>
        </FormProvider>
        <iframe src="https://www.google.com/maps?q=delhi&output=embed" className="h-120 w-[70%] ml-[15%] rounded-lg mt-10"></iframe>
        <HomeFooter />
        </ToursProvider>
      </BrowserRouter>
      </BookingProvider>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
