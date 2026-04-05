import { Link } from "react-router"
import SeasonToursContext from "./SeasonToursContext";
import { useContext } from "react";

export default function HomeWinter() {

    const {summertours} = useContext(SeasonToursContext);
    const shuffledTours = ([...summertours].sort(() => Math.random() - 0.5)).slice(0,8);   //(0 to 1) - 0.5 is always b/w (-0.5 to 0.5) means, sometimes -ve, sometimes +ve leading to sometimes a comes first, sometimes b.

    const stars = [];
    for (let i = 0; i < 5; i++) {
    stars.push(<img key={i} src="https://troll.is/assets/svg/star-filled.svg" className="h-5 w-5"/>);}


    return (
        <div className="pt-12 mx-30">
        <div className="textheading">
            <h2 className="text-2xl font-bold">Summer Specials - Tours and Multi-Day Adventures</h2>
            <p>Midnight Sun, Glacier Kayaking - Tried & Trusted Summer Itineraries.</p>
        </div>
        <div className="flex flex-wrap gap-6 mt-6 cardsdiv">
        {shuffledTours.map((tour) => (
        <Link to={"/detail/"+tour.id} key={tour.id} className="homeratinglink">
          <div className="homerating w-75 bg-white buttonclick">
            <img src={tour.image} className="h-48 w-full rounded-t-2xl"/>
            <h2 className="homeratingcontent py-2 text-[#146e13] font-bold text-lg">{tour.description}</h2>
            <h4 className="homeratingcontent">{stars}<span className="ml-2 homeratingtext">{tour.ratings + ".0"}</span></h4>
            <p className="homeratingcontent"><img src="https://troll.is/assets/svg/location.svg"></img><span className="homeratingtext">{tour.city}</span></p>
            <p className="homeratingcontent"><img src="https://troll.is/assets/svg/Transp.svg"></img><span className="homeratingtext">{tour.type}</span></p>
            <p className="homeratingcontent"><img src="https://troll.is/assets/svg/Time.svg"></img><span className="homeratingtext">{tour.hours+" hours"}</span></p>
            <p className="homeratingcontent"><img src="https://troll.is/assets/svg/difficulty.svg"></img><span className="homeratingtext">{"Service Before: "+tour.end_time+":00"}</span></p>
            <p className="homeratingcontent py-2"><span className="homeratingtext">From  </span><span className="text-[#161b19] font-semibold text-2xl">{"$"+tour.price}</span><span className="homeratingtext">/traveller</span></p>
          </div>
        </Link>
        ))}
        </div>
        </div>
    )
}