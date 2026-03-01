import { Link } from "react-router";
import tourdata from "../Utils/tourdata";
import { useEffect, useState } from "react";
import './allcards.css';
import SeasonToursContext from "./SeasonToursContext";
import { useContext } from "react";

export default function AllCards() {

    const { summertours, wintertours, springTours, insideindia, outsideindia, types} = useContext(SeasonToursContext);
    const [showSort, setShowSort] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [sortType, setSortType] = useState("none");
    const [originalData] = useState(tourdata); 
    const [displayData, setDisplayData] = useState(tourdata);
    const [showRegion, setShowRegion] = useState(false);
    const [showSeason, setShowSeason] = useState(false);
    const [showType, setShowType] = useState(false);
    const [showBudget, setShowBudget] = useState(false);
    const [filters,setFilters] = useState({region:[],season:[],type:[]});
    const [minBudget,setMinBudget] = useState(50);
    const [maxBudget,setMaxBudget] = useState(250);

    const indianCities = [...new Set(insideindia.map(t => t.city))];
    const internationalCities = [...new Set(outsideindia.map(t => t.city))];

    const handleSort = (type) => {
        setSortType(type);
        if(type === "none"){setDisplayData(originalData); return;}
        let sorted = [...displayData];
        if(type === "price"){sorted.sort((a,b)=>a.price-b.price);}
        if(type === "rating"){sorted.sort((a,b)=>b.ratings-a.ratings);}
        if(type === "travelhours"){sorted.sort((a,b)=>a.hours-b.hours);}
        setDisplayData(sorted);}

    const handleFilter = (category,value)=>{
        setFilters(prev=>{
        let arr = prev[category];
        let updated;
        if(arr.includes(value)){updated = arr.filter(v=>v!==value);}
        else{updated = [...arr,value];}
        return {...prev,[category]:updated};
        });
    }


    useEffect(() => {
        let filtered = [...originalData];
        // REGION
        if(filters.region.length > 0){filtered = filtered.filter(tour => filters.region.includes(tour.city));}
        // TYPE
        if(filters.type.length > 0){filtered = filtered.filter(tour => filters.type.includes(tour.type));}
        // SEASON
        if(filters.season.length > 0){
            let seasonData = [];
            if(filters.season.includes("summer")){seasonData = [...seasonData, ...summertours];}
            if(filters.season.includes("winter")){seasonData = [...seasonData, ...wintertours];}
            if(filters.season.includes("spring")){seasonData = [...seasonData, ...springTours];}
            filtered = filtered.filter(tour => seasonData.some(s => s.id === tour.id));}
        // BUDGET
        filtered = filtered.filter(tour => tour.price >= minBudget && tour.price <= maxBudget); 
        setDisplayData(filtered);
    },[filters,minBudget,maxBudget]);


const clearFilters = () => {
  setFilters({region:[],season:[],type:[]});
  setMinBudget(50);
  setMaxBudget(250);
  setDisplayData(originalData);
};

    console.log(insideindia);
    // console.log(summertours);

    const stars = [];
    for (let i = 0; i < 5; i++) {
    stars.push(<img key={i} src="https://troll.is/assets/svg/star-filled.svg" className="h-5 w-5"/>);}


    return (
        <div>
            <div className="mx-auto text-center">
                <h1 className="font-extrabold text-4xl">Here are All Our Tours Services.</h1>
                <h2 className="font-bold text-xl">Filter and Sort According to your Requirements.</h2>
            </div>
            <div className="flex">
                <div className="allcardsleft">
                    <h2 className="font-semibold mb-4 border-b-2 cursor-pointer" onClick={()=>setShowSort(!showSort)}>SORT BY <span>{showSort ? "▼" : "▲"}</span></h2>
                    {showSort && ( <div className="flex flex-col gap-2 mb-4">
                                    <button onClick={()=>handleSort("price")} className={`cursor-pointer ${sortType === "price" ? "bg-green-800 text-white" : ""}`}> Price </button>
                                    <button onClick={()=>handleSort("rating")} className={`cursor-pointer ${sortType === "rating" ? "bg-green-800 text-white" : ""}`}>Rating</button>
                                    <button onClick={()=>handleSort("travelhours")} className={`cursor-pointer ${sortType === "travelhours" ? "bg-green-800 text-white" : ""}`}>Travel Hours</button>
                                    <button onClick={()=>handleSort("none")} className={`cursor-pointer ${sortType === "none" ? "bg-green-800 text-white" : ""}`}>None</button>
                                    </div>)}

                    <h2 className="font-semibold mb-4 border-b-2 cursor-pointer" onClick={()=>setShowFilter(!showFilter)}>FILTERS <span>{showFilter ? "▼" : "▲"}</span></h2>
                    {showFilter && (
                      <div>
                        {/* REGION */}
                        <div className="py-3 border-b cursor-pointer" onClick={()=>setShowRegion(!showRegion)}> Region <span>{showRegion ? "▼":"▲"} </span></div>
                        {showRegion && (<div className="ml-3 flex flex-col gap-1">
                                            <p className="font-semibold">Indian Cities</p>
                                            {indianCities.map(city=>(<label key={city}> 
                                                                        <input type="checkbox" checked={filters.region.includes(city)} onChange={()=>handleFilter("region",city)}/> {city}
                                                                       </label>))}
                                            <p className="font-semibold mt-2">International</p>
                                            {internationalCities.map(city=>(<label key={city}>
                                                                                <input type="checkbox" checked={filters.region.includes(city)} onChange={()=>handleFilter("region",city)}/> {city}
                                                                              </label>))}
                                        </div>
                        )}
                        {/* SEASON */}
                        <div className="py-3 border-b cursor-pointer" onClick={()=>setShowSeason(!showSeason)}> Season <span>{showSeason ? "▼":"▲"}</span></div>
                        {showSeason && (<div className="ml-3 flex flex-col gap-1">
                                            <label> <input type="checkbox" checked={filters.season.includes("winter")} onChange={()=>handleFilter("season","winter")} /> Winter</label>
                                            <label> <input type="checkbox" checked={filters.season.includes("summer")} onChange={()=>handleFilter("season","summer")} /> Summer</label>
                                            <label> <input type="checkbox" checked={filters.season.includes("spring")} onChange={()=>handleFilter("season","spring")} /> Spring</label>
                                        </div>
                        )}
                        {/* TYPE */}
                        <div className="py-3 border-b cursor-pointer" onClick={()=>setShowType(!showType)}> Type <span>{showType ? "▼":"▲"}</span></div>
                        {showType && (<div className="ml-3 flex flex-col gap-1">
                                        {types.map((t)=>(<label key={t}> <input type="checkbox" checked={filters.type.includes(t)} onChange={()=>handleFilter("type",t)} />{t} </label> ))} 
                                      </div>
                        )}
                        {/* BUDGET */}
                        <div className="cursor-pointer py-3" onClick={()=>setShowBudget(!showBudget)}>Budget <span>{showBudget ? "▼":"▲"}</span></div>
                        {showBudget && (<div className="budget-slider">
                                            <p>${minBudget} - ${maxBudget}</p>
                                            <div className="slider-container">
                                                <div className="slider-range" style={{ left: `${((minBudget-50)/(250-50))*100}%`, width: `${((maxBudget-minBudget)/(250-50))*100}%`}}></div>
                                                <input type="range" min="50" max="250" className="thumb thumb-left" value={minBudget} 
                                                   onChange={(e)=>{const value = Number(e.target.value); if(value < maxBudget) setMinBudget(value);}}/>
                                                <input type="range" min="50" max="250" className="thumb thumb-right" value={maxBudget}
                                                    onChange={(e)=>{ const value = Number(e.target.value); if(value > minBudget) setMaxBudget(value);}}/>
                                            </div>
                                        <div className="range-values"> <span>$50</span> <span>$250</span> </div>
                                        </div>
                        )}  

                        <button onClick={clearFilters} className="cursor-pointer mt-3 bg-red-600 text-white font-bold p-1 rounded-md">Clear All Filters</button>

                      </div>
                    )}

                </div>
                <div className="flex-1 p-4 pt-12 mx-30">   
                    <div>
                        <p className="text-xl font-semibold">Explore all regions and tours - Tried & Trusted all Itineraries.</p>
                    </div>
                    <div className="flex flex-wrap gap-6 mt-6">
                        {displayData.map((tour) => (
                        <Link to={"/detail/"+tour.id} key={tour.id} className="homeratinglink">
                        <div className="homerating w-75 bg-white">
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
            </div>
        </div>
    )
}