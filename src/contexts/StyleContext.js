import React, { createContext, useState } from "react";

export const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [theme, setTheme] = useState(true);

  return (
    <StyleContext.Provider
      value={{
        isChecked,
        setIsChecked,
        theme,
        setTheme,
        viewBlogs: true,
        viewExperiences: true,
        viewSkills: true,
        viewEducation: true,
        viewProjects: true,
        viewPublications: true
      }}
    >
      {children}
    </StyleContext.Provider>
  );
};
