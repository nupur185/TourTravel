import './seasonalexp.css';
import { Link } from "react-router"
export default function TopHeader() {
    return (
      <div className="w-full bg-white fixed z-101">
        <div className="topheader">
          <h1 className="flex flex-wrap font-bold" > <img src="https://tse3.mm.bing.net/th/id/OIP.cv5rdYoatS2bUAdFALOhgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Logo" className="w-25 h-23 object-contain mt-[-38]" /> TravelTour</h1>
          <Link to="/allCards/"><p className="hover:text-blue-500 cursor-pointer">Our Tours</p></Link>
          <div className="dropdown">
            <p className="nav-item">Seasonal Experience ⏷</p>
            {/* Dropdown menu - hidden by default, show on hover */}
            <div className="dropdown-menu">
              <Link to="/activity/summer">
                <p className="dropdown-item">Summer</p>
              </Link>
              <Link to="/activity/winter">
                <p className="dropdown-item">Winter</p>
              </Link>
              <Link to="/activity/spring">
                <p className="dropdown-item">Spring</p>
              </Link>
            </div>
          </div>
          <p className="hover:text-blue-500 cursor-pointer">Plan Your Trip</p>
          <p className="hover:text-blue-500 cursor-pointer">Your Bookings</p>
        </div>
      </div>
    )
}