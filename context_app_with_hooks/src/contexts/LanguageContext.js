import React, { useState, createContext } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = props => {
  const [language, setLanguage] = useState("french");
  const changeLanguage = e => setLanguage(e.target.value);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
