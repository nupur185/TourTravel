import tourdata from "../Utils/tourdata"
import HomeActivities from "./HomeActivities"
import HomeRating from "./HomeRating"
import HomeAbroad from "./HomeAbroad"
import HomeWinter from "./HomeWinter"
import HomeSummer from "./HomeSummer"
import HomeStrip2 from "./HomeStrip2"
import { useEffect, useState } from "react"
import { createContext, useContext } from "react"

export default function Homecontent() {

    const indianCities = [
    "Delhi","Mumbai","Jaipur","Goa","Varanasi","Agra","Udaipur","Kolkata",
    "Chennai","Hyderabad","Bangalore","Shimla","Manali","Rishikesh","Amritsar",
    "Mysore","Darjeeling","Leh","Pune","Ahmedabad"];
    const internationalCities = [
    "Paris","Tokyo","Australia","Rome","Sydney","Dubai","London","Barcelona",
    "Singapore","Bangkok","Toronto","Bali","Zurich","Amsterdam","Prague",
    "Istanbul","Vienna","Seoul","Los","Canada"];
    const outsideindia= tourdata.filter((tour) =>!indianCities.includes(tour.city));
    const insideindia= tourdata.filter((tour) =>indianCities.includes(tour.city));

    const allCities = [...indianCities, ...internationalCities];
    const [summerTours, setSummerTours] = useState([]);
    const [winterTours, setWinterTours] = useState([]);
    const [springTours, setSpringTours] = useState([]);

    useEffect(()=> {
        const fetchWeather= async()=> {
            const summer=[];
            const winter=[];
            const spring=[];

            for(let city of allCities) {
                const res= await fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&appid=5796abbde9106b7da4febfae8c44c232&units=metric`);
                const data= await res.json();
                const temp = data.list[0].main.temp;
                const cityTours = tourdata.filter(tour => tour.city === city);
                if (temp > 10) {summer.push(...cityTours);} 
                else if (temp < 0) {winter.push(...cityTours);} 
                else {spring.push(...cityTours);}
            }

            setSummerTours(summer);
            setWinterTours(winter);
            setSpringTours(spring);
        };
        fetchWeather();
    }, [tourdata]);
    

    return (
        <>
        <HomeActivities tourdata={tourdata}/>
        <HomeRating tourdata={tourdata}/>
        <HomeAbroad outsideindia={outsideindia}/>
        <img src="https://images.troll.is/v1/troll/aIEhsFGsbswqTL4j_2025banner.png?auto=format%2Ccompress&width=2048" className="w-[82vw] flex justify-center mx-[8%] my-[5%]"></img>
        <HomeWinter wintertours={winterTours}/>
        <HomeSummer summertours={summerTours}/>
        <HomeStrip2/>
        </>
    )
}

