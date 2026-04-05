import { useContext } from "react";
import BookingContext from "./BookingContext";
import tourdata from "../Utils/tourdata";
import { Link } from "react-router";

export default function Mybooking() {
  const { bookedIds, toggleBooking } = useContext(BookingContext);

  const bookedCards = tourdata.filter((card) => bookedIds.includes(card.id));

  if (bookedCards.length === 0) {
    return <p>No bookings yet!</p>;
  }

  const stars = [];
    for (let i = 0; i < 5; i++) {
    stars.push(<img key={i} src="https://troll.is/assets/svg/star-filled.svg" className="h-5 w-5"/>);}

   return (
    <div className="cards-grid flex flex-wrap gap-6 mt-6 ml-[10%]">
      {bookedCards.map((card) => (
        <div key={card.id} >
                        <Link to={"/detail/"+card.id} className="homeratinglink">
                        <div className="homerating w-75 bg-white">
                            <img src={card.image} className="h-48 w-full rounded-t-2xl"/>
                            <h2 className="homeratingcontent py-2 text-[#146e13] font-bold text-lg">{card.description}</h2>
                            <h4 className="homeratingcontent">{stars}<span className="ml-2 homeratingtext">{card.ratings + ".0"}</span></h4>
                            <p className="homeratingcontent"><img src="https://troll.is/assets/svg/location.svg"></img><span className="homeratingtext">{card.city}</span></p>
                            <p className="homeratingcontent"><img src="https://troll.is/assets/svg/Transp.svg"></img><span className="homeratingtext">{card.type}</span></p>
                            <p className="homeratingcontent"><img src="https://troll.is/assets/svg/Time.svg"></img><span className="homeratingtext">{card.hours+" hours"}</span></p>
                            <p className="homeratingcontent"><img src="https://troll.is/assets/svg/difficulty.svg"></img><span className="homeratingtext">{"Service Before: "+card.end_time+":00"}</span></p>
                            <p className="homeratingcontent py-2"><span className="homeratingtext">From  </span><span className="text-[#161b19] font-semibold text-2xl">{"$"+card.price}</span><span className="homeratingtext">/traveller</span></p>
                        </div>
                        </Link>
                        <div className="bg-white mt-[-6%] pt-1 rounded-b-2xl border-b-2 border-b-[#c2bebe] border-x-1 border-x-[#c2bebe]">
                          <button className="buttonclick bg-green-900 text-white mt-2 mb-5 h-10 px-1 mx-[10%] text-xl rounded-lg cursor-pointer w-[75%]" onClick={() => toggleBooking(card.id)}>Cancel Booking</button>
                        </div>
      </div>                  
    ))}
                     </div>
      )
    
  
}