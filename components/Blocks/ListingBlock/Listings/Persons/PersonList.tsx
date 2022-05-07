import Section from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import * as React from "react";
import { useListingBlock } from "../../listingContext";

import PersonListItem from "./PersonListItem";

const PersonList: React.FC = (props) => {
  const { personItems: items, title, showTitle } = useListingBlock();
  const _title = showTitle && title;
  const [isMounted, setIsMounted] = React.useState(false); // Need this for the react-tooltip

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {_title && (
        <Typo
          variant="h3"
          as="h2"
          className="text-center uppercase pb-12 md:pb-24 pt-6 md:pt-12 "
        >
          {title}
        </Typo>
      )}
      <ul className="relative w-full grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center z-10">
        {isMounted &&
          items?.map((i, index) => <PersonListItem key={index} {...i} />)}
      </ul>
    </>
  );
};

export default PersonList;
