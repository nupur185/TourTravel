import { Link } from "react-router"

export default function HomeAbroad({outsideindia}) {

    const uniqueTypes = [];
    const seen = new Set();
    outsideindia.forEach((tour) => {if (!seen.has(tour.image)) {seen.add(tour.image); uniqueTypes.push(tour);}});
    const abroadcard= uniqueTypes.slice(0,6);

    return (
        <div className="pt-12 mx-30">
            <div className="textheading">
                <h2 className="text-2xl font-bold">Discover International Regions</h2>
                <p>Abroad’s most exciting attractions, destinations and must-go places.</p>
            </div>
            <div className="flex flex-wrap gap-6 mt-6 carddiv">
                {abroadcard.map((tour) => (
                <Link to={"/activity/"+tour.city} key={tour.id} className="broadcard">
                <div className="bg-white relative buttonclick">
                <img src={tour.image} className="rounded-2xl h-50 w-100 imagecard"/>
                <p id="homeabroadDes">{tour.city}</p>
                <div className="darkingcard"></div>
            </div>
        </Link>
        ))}
            </div>
        </div>
    )
}