import React from "react";
import { ListingBlogResult } from "./listingBlockQuery";

const ListingBlockContext = React.createContext<ListingBlogResult>({
  _key: "",
  _type: "listing",
});

export const ListingBlockContextProvider: React.FC<ListingBlogResult> = ({
  children,
  ...rest
}) => {
  return (
    <ListingBlockContext.Provider value={{ ...rest }}>
      {children}
    </ListingBlockContext.Provider>
  );
};

export const useListingBlock = () => {
  return React.useContext(ListingBlockContext);
};
