import tourdata from "../Utils/tourdata";
import { useParams } from "react-router";

export default function FilteredCards() {

    const {type} = useParams();
    console.log(type);
    const filteredData = tourdata.filter(item => {
        return (item.city && item.city.toLowerCase() === type.toLowerCase()) || (item.type && item.type.toLowerCase() === type.toLowerCase());});


    const stars = [];
    for (let i = 0; i < 5; i++) {
    stars.push(<img key={i} src="https://troll.is/assets/svg/star-filled.svg" className="h-5 w-5"/>);}

    return(
        <div>
            {filteredData.length > 0 ? (
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1V7sdr7lpiT4akEqgKILxixXHedzimsIYxg&s" className="block mx-auto w-[60vw] h-120"></img>
                <div className="bg-[#dcfce7] flex flex-wrap px-[10%] py-4 mx-40 my-3 rounded-xl justify-between">
                <p>🔒 Fast and Secure Payments</p>
                <p>🏷️ Best Price Guarantee</p>
                <p>↪️ 24 hrs Cancellation Policy</p>
                <p>🕵 Professional Guide</p>
                </div> 
                <div className="flex">
                    <p className="w-[50%] mx-[10%]">The easiest and most efficient way to plan your adventure is by choosing one of our designed multi day tours. At Troll we offer packages that include the expertise of guides, exciting activities, comfortable accommodations and delicious breakfasts. Throughout your journey you'll be joined by a group of adventurers and led by our knowledgeable guide who will ensure you create unforgettable memories while gaining a deeper understanding of Icelandic culture.</p>
                    <div>Sort By </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-6 mx-[9%] w-[100vw]">
                {filteredData.map(item => (
                    <div key={item.id} className="homerating w-75 bg-white">
                    <img src={item.image} className="h-48 w-full rounded-t-2xl"/>
                    <h2 className="homeratingcontent py-2 text-[#146e13] font-bold text-lg">{item.description}</h2>
                    <h4 className="homeratingcontent">{stars}<span className="ml-2 homeratingtext">{item.ratings + ".0"}</span></h4>
                    <p className="homeratingcontent"><img src="https://troll.is/assets/svg/location.svg"></img><span className="homeratingtext">{item.city}</span></p>
                    <p className="homeratingcontent"><img src="https://troll.is/assets/svg/Transp.svg"></img><span className="homeratingtext">{item.type}</span></p>
                    <p className="homeratingcontent"><img src="https://troll.is/assets/svg/Time.svg"></img><span className="homeratingtext">{item.hours+" hours"}</span></p>
                    <p className="homeratingcontent"><img src="https://troll.is/assets/svg/difficulty.svg"></img><span className="homeratingtext">{"Service Before: "+item.end_time+":00"}</span></p>
                    <p className="homeratingcontent py-2"><span className="homeratingtext">From  </span><span className="text-[#161b19] font-semibold text-2xl">{"$"+item.price}</span><span className="homeratingtext">/traveller</span></p>
                    </div>
                ))}
                </div>
                </div>
            ) : (
                <div>
                <p>No tours available for {params[0]}</p>
                <p>Don't Worry, </p>
                <p>We have many tours available for you. Just Explore it on your own once.</p>
                <button>Discover Tours →</button>
                </div>
            )}
        </div>
    );
}