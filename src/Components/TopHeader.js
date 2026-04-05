import './seasonalexp.css';
import React, { useContext, useState } from "react";
import { FormContext } from "./FormContext";
import { Link } from "react-router"
export default function TopHeader() {
  const { openForm } = useContext(FormContext);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div className="w-full bg-white fixed z-101">
        <div className="topheader flex flex-wrap justify-around">
          <h1 className="flex flex-wrap font-bold float-left ml-[5%]" > <img src="https://tse3.mm.bing.net/th/id/OIP.cv5rdYoatS2bUAdFALOhgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Logo" className="w-25 h-23 object-contain mt-[-38]" /> TourTravel</h1>
          {/* Desktop */}
          <div className='topheaderright flex justify-between items-center w-[60%] mr-[5%]'>
          <Link to="/" onClick={() => setActive("home")} className={`clicktext cursor-pointer ${active === "home" ? "active-link" : "hover:text-blue-500"}`}>🏠︎Home</Link>
          <Link to="/allCards/" onClick={() => setActive("tours")} className={`clicktext cursor-pointer ${active === "tours" ? "active-link" : "hover:text-blue-500"}`}><p className="hover:text-blue-500 cursor-pointer clicktext">Our Tours</p></Link>
          <div className="dropdown">
            <p onClick={() => setActive("exper")} className={`clicktext nav-item cursor-pointer ${active === "exper" ? "active-link" : "hover:text-blue-500"}`}>Seasonal Experience ⏷</p>
            <div className="dropdown-menu">
              <Link to="/activity/summer">
                <p onClick={() => setActive("summer")} className={`dropdown-item clicktext ${active === "summer" ? "active-link" : ""}`}>Summer</p>
              </Link>
              <Link to="/activity/winter">
                <p onClick={() => setActive("winter")} className={`dropdown-item clicktext ${active === "winter" ? "active-link" : ""}`}>Winter</p>
              </Link>
              <Link to="/activity/spring">
                <p onClick={() => setActive("spring")} className={`dropdown-item clicktext ${active === "spring" ? "active-link" : ""}`}>Spring</p>
              </Link>
            </div>
          </div>
          <p onClick={() =>{openForm(); setActive("plan")}} className={`clicktext cursor-pointer ${active === "plan" ? "active-link" : "hover:text-blue-500"}`}>Plan Your Trip</p>
          <Link to="/mybookings">
          <p onClick={() => setActive("booking")} className={`clicktext cursor-pointer ${active === "booking" ? "active-link" : "hover:text-blue-500"}`}>Your Bookings</p>
          </Link>
          </div>

          {/* mobile/ tablet */}

          <div className="text-3xl cursor-pointer hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div> 
          {menuOpen && (
              <div className="flex flex-col bg-white p-4 gap-3 mobilemenu">
              <Link to="/" onClick={() => {setActive("home"); setMenuOpen(false)}}>Home</Link>
              <Link to="/allCards/" onClick={() => {setActive("tours"); setMenuOpen(false)}}>Our Tours</Link>
              <Link to="/activity/summer" onClick={() => setMenuOpen(false)}>Summer</Link>
              <Link to="/activity/winter" onClick={() => setMenuOpen(false)}>Winter</Link>
              <Link to="/activity/spring" onClick={() => setMenuOpen(false)}>Spring</Link>
              <p onClick={() => {openForm(); setMenuOpen(false)}}>Plan Your Trip</p>
              <Link to="/mybookings" onClick={() => setMenuOpen(false)}>Your Bookings</Link>
              </div>
          )}

        </div>
      </div>
    )
}