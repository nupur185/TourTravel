import tourdata from "../Utils/tourdata"
import HomeActivities from "./HomeActivities"
import HomeRating from "./HomeRating"
import HomeAbroad from "./HomeAbroad"
import HomeWinter from "./HomeWinter"
import HomeSummer from "./HomeSummer"
import HomeStrip2 from "./HomeStrip2"
import { useEffect, useState } from "react"

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

    return (
        <>
        <HomeActivities tourdata={tourdata}/>
        <HomeRating tourdata={tourdata}/>
        <HomeAbroad outsideindia={outsideindia}/>
        <img src="https://images.troll.is/v1/troll/aIEhsFGsbswqTL4j_2025banner.png?auto=format%2Ccompress&width=2048" className="w-[82vw] flex justify-center mx-[8%] my-[5%]"></img>
        <HomeWinter/>
        <HomeSummer/>
        <HomeStrip2/>
        </>
    )
}

