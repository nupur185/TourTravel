import { createContext, useState, useEffect } from "react";
import tourdata from "../Utils/tourdata";

const SeasonToursContext = createContext();

export function ToursProvider({children}) {

    const types = [
    "Religious","adventure","wildlife","scenic","historical",
    "architecture","ghost","food"];
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
    const [summertours, setSummertours] = useState([]);
    const [wintertours, setWintertours] = useState([]);
    const [springTours, setSpringTours] = useState([]);

    useEffect(()=> {
        const fetchWeather= async()=> {
            try{
                const summer=[];
                const winter=[];
                const spring=[];

            for(let city of allCities) {
                console.log(city);
                const cityTours = tourdata.filter(tour => tour.city === city);
                const res= await fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&appid=5796abbde9106b7da4febfae8c44c232&units=metric`);
                const data= await res.json();
                const temp = data.list[0].main.temp;
                console.log(temp);
                if (temp > 20) {summer.push(...cityTours);} 
                else if (temp < 0) {winter.push(...cityTours);} 
                else {spring.push(...cityTours);}
            }

            setSummertours(summer);
            setWintertours(winter);
            setSpringTours(spring);
            }
            catch(error){
                console.log("cannot fetch data");
            }
            
        };
        fetchWeather();
    }, [tourdata]);

     return (
        <SeasonToursContext.Provider value={{ summertours, wintertours, springTours, outsideindia, insideindia, allCities, types, indianCities, internationalCities }}>
            {children}     
        </SeasonToursContext.Provider>
    )

} 

export default SeasonToursContext;