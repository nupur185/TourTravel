import { createContext, useState } from "react";

// Context creation
export const FormContext = createContext();

export function FormProvider({ children }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    season: "",
    reason: "",
    budget: "",
  });

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <FormContext.Provider value={{ showForm, openForm, closeForm, formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}