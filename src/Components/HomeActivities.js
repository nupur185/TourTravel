import { Link } from "react-router"

export default function HomeActivities({tourdata}) {

    const uniqueTypes = [];
    const seen = new Set();

    tourdata.forEach((tour) => {if (!seen.has(tour.type)) {seen.add(tour.type); uniqueTypes.push(tour);}});

    return (
        <div className="pt-12 mx-30">
        <div>
            <h2 className="text-2xl font-bold">Discover Things To Do By Activities</h2>
            <p>Small Groups, Expert Guides, and 24-hour Customer Service</p>
        </div>
        <div className="flex gap-10 flex-wrap mt-6">
        {uniqueTypes.map((tour) => (
        <Link to={"/activity/"+tour.type} key={tour.id}>
          <div className="homeactivity bg-white">
            <img src={tour.image} className="h-40 w-70 rounded-t-2xl"/>
            <p className="font-semibold flex justify-center p-2">{tour.type}</p>
          </div>
        </Link>
        ))}
        </div>
        </div>
    )
}