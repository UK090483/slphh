import React from "react";

type SectionContextValues = {
  bgColor?: string;
  width?: string;
};

const SectionContext = React.createContext<SectionContextValues>({});

export const SectionContextProvider: React.FC<SectionContextValues> = ({
  children,
  ...rest
}) => {
  return (
    <SectionContext.Provider value={{ ...rest }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  return React.useContext(SectionContext);
};
