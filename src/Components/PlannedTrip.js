import React, { useContext } from "react";
import { FormContext } from "./FormContext";
import SeasonToursContext from "./SeasonToursContext";
import tourdata from "../Utils/tourdata";
import { Link } from "react-router";

export default function FilteredCards() {
  const { formData } = useContext(FormContext);

  const { summertours, wintertours, springTours, outsideindia, insideindia, allCities, types, indianCities, internationalCities } = useContext(SeasonToursContext);

  let tempData = [];

  if (!formData.season) {
    tempData = tourdata;
  } else if (formData.season === "Hot") {
    tempData = summertours;
  } else if (formData.season === "Cold") {
    tempData = wintertours;
  } else {
    tempData = springTours;
  }

  if (formData.location === "India") {
    tempData = tempData.filter((card) =>
    indianCities.includes(card.city)
  );
  } else if (formData.location === "Outside India") {
    tempData = tempData.filter((card) =>
    internationalCities.includes(card.city)
  );
  }

  let selectedTypes = [];
  if (formData.reason === "Religious") {
    selectedTypes = ["Religious", "historical"];
  } else if (formData.reason === "Adventure") {
    selectedTypes = ["wildlife", "adventure"];
  } else if (formData.reason === "Ghosty Experiences") {
    selectedTypes = ["ghost"];
  } else if (formData.reason === "Scenic") {
    selectedTypes = ["scenic", "architecture"];
  } else if (formData.reason === "Fun") {
    selectedTypes = ["food"];
  }

  if (selectedTypes.length > 0) {
    tempData = tempData.filter((card) =>
      selectedTypes.includes(card.type?.toLowerCase())
    );
  }

  if (formData.budget) {
    tempData = tempData.filter(
      (card) => card.price <= Number(formData.budget)
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recommended Trips</h1>

      {tempData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tempData.map((card) => (
            <Link to={"/detail/"+card.id} key={card.id}>
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.city}</p>
              <p className="text-sm">{card.type}</p>

              <p className="mt-2 font-bold text-green-600">${card.price}</p>

              <button className="mt-3 w-full bg-green-500 text-white py-1 rounded hover:bg-green-600 buttonclick">
                View Details
              </button>
            </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10">
          <p className="text-lg font-semibold text-red-500 mb-3">
            Loading Your Trip....
          </p>
          <p className="text-gray-600">
            Don't worry, we have many tours available for you. Explore yourself!
          </p>

          <div className="mt-5">
            <button onClick={() => window.location.href = "/"} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Explore All Tours
            </button>
          </div>
        </div>
      )}
    </div>
  );
}