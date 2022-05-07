import * as React from "react";
import { useListingBlock } from "../../listingContext";
import Phase from "./Phase";
import List from "./List";

const CustomList: React.FC = () => {
  const props = useListingBlock();
  const { customVariants = "list" } = props;

  if (
    ["list", "iconList"].includes(customVariants || "") ||
    customVariants === null
  ) {
    return <List />;
  }
  if (customVariants === "phases") {
    return <Phase />;
  }
  return null;
};

export default CustomList;
