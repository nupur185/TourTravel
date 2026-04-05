import React, { useState, useContext } from "react";
import { FormContext } from "./FormContext";
import { useNavigate } from "react-router";

export default function TripForm() {
  const navigate = useNavigate();
  const { showForm, closeForm, formData, setFormData } =
    useContext(FormContext);
  const [step, setStep] = useState(1);

  if (!showForm) return null; // Hide form if not open

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const budgetNumber = Number(formData.budget);
    if (budgetNumber < 50 || budgetNumber > 250) {
      alert("Budget must be between 50 and 250!");
      return;
    }
    closeForm();
    navigate("/results");
  };

  return (
    <div className="fixed top-[40vh] left-[10vw] w-[80vw] bg-white border shadow-lg p-5 z-50 rounded">
      <form onSubmit={handleSubmit} className="space-y-4">
      <div> Planning your Trip</div>
      <div>Just Answer some basic questions </div>
      <div>We will recommend you the best choices for your trip</div>
        {/* Step 1: Name */}
        {step === 1 && (
          <div>
            <label className="block font-medium mb-1">Your Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              required
              className="w-full border rounded px-2 py-1"
            />
            <div className="flex justify-end mt-3">
              <button type="button" onClick={nextStep} className="buttonclick px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                Next
              </button>
              <button type="button" onClick={closeForm} className="buttonclick px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition">
                  Cancel
              </button>
            </div>
          </div>
          
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <div>
            <label className="block font-medium mb-1">Where do you want to travel?</label>
            <div className="space-y-1">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="location"
                  value="India"
                  checked={formData.location === "India"}
                  onChange={handleChange}
                  required
                />
                <span>Inside India</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="location"
                  value="Outside India"
                  checked={formData.location === "Outside India"}
                  onChange={handleChange}
                />
                <span>Outside India</span>
              </label>
            </div>
            <div className="flex justify-between mt-3">
              <button type="button" onClick={prevStep} className="buttonclick px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition">
                Back
              </button>
              <button type="button" onClick={nextStep} className="buttonclick px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                Next
              </button>
              <button type="button" onClick={closeForm} className="buttonclick px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition">
                  Cancel
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Season */}
        {step === 3 && (
          <div>
            <label className="block font-medium mb-1">Preferred Season:</label>
            <select
              name="season"
              value={formData.season || ""}
              onChange={handleChange}
              required
              className="w-full border rounded px-2 py-1">
              <option value="">Select</option>
              <option value="Hot">Hot</option>
              <option value="Cold">Cold</option>
              <option value="Spring/Autumn">Spring/Autumn</option>
            </select>
            <div className="flex justify-between mt-3">
              <button type="button" onClick={prevStep} className="buttonclick px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition">
                Back
              </button>
              <button type="button" onClick={nextStep} className="buttonclick px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                Next
              </button>
              <button type="button" onClick={closeForm} className="buttonclick px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition">
                  Cancel
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Reason + Budget */}
        {step === 4 && (
          <div className="space-y-2">
            <label className="block font-medium mb-1">Why do you want to travel?</label>
            <select
              name="reason"
              value={formData.reason || ""}
              onChange={handleChange}
              required
              className="w-full border rounded px-2 py-1"
            >
              <option value="">Select</option>
              <option value="Religious">Religious</option>
              <option value="Adventure">Adventure</option>
              <option value="Ghosty Experiences">Ghosty Experiences</option>
              <option value="Scenic">Scenic</option>
              <option value="Fun">Fun</option>
            </select>

            <label className="block font-medium">Budget (₹50 - ₹250):</label>
            <input
              type="number"
              name="budget"
              value={formData.budget || ""}
              onChange={handleChange}
              min={50}
              max={250}
              required
              className="w-full border rounded px-2 py-1"
            />

            <div className="flex justify-between mt-3">
              <button type="button" onClick={prevStep} className="buttonclick px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition">
                Back
              </button>
              <div className="flex space-x-2">
                <button type="submit" className="buttonclick px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Submit
                </button>
                <button type="button" onClick={closeForm} className="buttonclick px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}