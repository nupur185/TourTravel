import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import HomeheaderImage from "../Utils/HomeheaderImage";

function HomeHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    setInterval(() => {
      setCurrentIndex((prev) => (prev+1)%(HomeheaderImage.length));
    }, 2000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[95vh] pt-19">

      {/* Background */}
      <div id="hometopimg" style={{backgroundImage: `url(${HomeheaderImage[currentIndex].image})`,}}/>
     <div id="homeheader"/>

    <div id="homeheadcontent">
      <h1 className="text-5xl font-bold mb-8 border-b-white text-shadow-white descriptionh">{HomeheaderImage[currentIndex].head}</h1>
      <p className="text-xl mb-8 leading-relaxed border-b-white text-shadow-white descriptiont">{HomeheaderImage[currentIndex].description}</p>
      <Link to="/allCards/"><button className="buttonclick cursor-pointer bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg w-fit text-lg transition">Discover Tours →</button></Link>
    </div>

    <div className="absolute top-[84%] w-[90%] left-30 flex gap-[5%] z-20 glass">

        <div className="glass-inner">
        <h2 className="text-xl font-bold">Tripadvisor Travelers' Choice</h2>
        <p>Best of the best in Iceland: 2025, 2026</p>
      </div>

        <div className="glass-inner">
        <h2 className="text-3xl font-bold">4.8 ⭐</h2>
        <p>40,000+ Across Platforms Reviews</p>
      </div>

    </div>

    </div>
  );
}

export default HomeHeader;