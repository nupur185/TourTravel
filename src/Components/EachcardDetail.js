import './singleCard.css';

import { useParams } from "react-router";
import tourdata from "../Utils/tourdata";

export default function EachcardDetail() {

    const { id } = useParams();   
    const card = tourdata.find((tour) => tour.id === Number(id));

    return (
        <div>
            <img src={card.image} className="block mx-auto w-[60vw] h-120"></img>
            <div className="bg-[#dcfce7] flex flex-wrap px-[10%] py-4 mx-40 my-3 rounded-xl justify-between">
                <p>🔒 Fast and Secure Payments</p>
                <p>🏷️ Best Price Guarantee</p>
                <p>↪️ 24 hrs Cancellation Policy</p>
                <p>🕵 Professional Guide</p>
            </div>
            <div className="mx-42 my-10">
                <h2 className="font-bold text-3xl mb-4">All About this Service : </h2>
                <div className="flex gap-5">
                <p className="bg-[#eaf9ef] px-4 rounded-lg text-md text-green-950">Best Seller!</p>
                <p className="bg-[#eaf9ef] px-4 rounded-lg text-md text-green-950">Iconic Views!!</p>
                </div>
            </div>
            <div className="mx-42">
                <h2 className="font-bold mb-4 text-xl">Tour Description:</h2>
                <h3 className="singlecardHead">1️⃣ Overview</h3>
                <div className="singlecardDes">
                <p>Experience the beauty and culture of {card.city} through this carefully designed {card.type} tour. This premium guided experience allows travelers to explore some of the city's most iconic locations while learning about its {card.type}, and local lifestyle.</p>
                </div>
                <h3 className="singlecardHead">2️⃣ Tour Highlights</h3>
                <div className="singlecardDes">
                <p>Explore famous landmarks and {card.type} places of <span>{card.city}</span></p>
                <p>Learn <span>{card.type}</span> facts and stories from a professional guide</p>
                <p>Capture beautiful photos at popular viewpoints</p>
                <p>Enjoy a relaxed and well-planned travel experience</p>
                <p>Perfect for solo travelers, couples, and small groups</p>
                </div>
                <h3 className="singlecardHead">3️⃣ Tour Schedule</h3>
                <div className="singlecardDes">
                <p>Starting Time: <span>{card.starting_time}:00 AM</span></p>
                <p>Ending Time: <span>{card.end_time}:00 PM</span></p>
                <p>Duration: Approximately <span>{card.hours} hours </span> of guided exploration</p>
                <p>The itinerary is designed to give travelers enough time to enjoy each location without feeling rushed.</p>
                </div>
                <h3 className="singlecardHead">4️⃣ Price & Duration</h3>
                <div className="singlecardDes">
                <p>This premium experience starts from <span>{card.price}</span> per person and includes a guided tour with expert assistance throughout the journey.</p>
                </div>
                <h3 className="singlecardHead">5️⃣ Customer Rating</h3>
                <div className="singlecardDes">
                <p>Travelers have rated this tour <span>{card.ratings} ★ </span>, making it one of the most loved experiences for visitors looking to explore {card.city}.</p>
                </div>
            </div>
        </div>
    )
}