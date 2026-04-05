import { createContext, useState, useEffect } from "react";

const BookingContext = createContext();

export default BookingContext;

export function BookingProvider({ children }) {
  const [bookedIds, setBookedIds] = useState(() => {
    const stored = localStorage.getItem("bookedCards");
    return stored ? JSON.parse(stored) : [];
  });

  // Update localStorage whenever bookedIds changes
  useEffect(() => {
    localStorage.setItem("bookedCards", JSON.stringify(bookedIds));
  }, [bookedIds]);

  const toggleBooking = (id) => {
    setBookedIds((prev) =>
      prev.includes(id) ? prev.filter((bid) => bid !== id) : [...prev, id]
    );
  };

  return (
    <BookingContext.Provider value={{ bookedIds, toggleBooking }}>
      {children}
    </BookingContext.Provider>
  );
}