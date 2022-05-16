import React from "react";
import dynamic from "next/dynamic";
const EventsList = dynamic(
  () => import("@components/Blocks/ListingBlock/Listings/Events/EventsList")
);
const PersonList = dynamic(() => import("./Listings/Persons/PersonList"));
const TestimonialList = dynamic(
  () => import("./Listings/Testimonials/TestimonialList")
);
const CustomList = dynamic(() => import("./Listings/Custom/CustomList"));

import { ListingBlogResult } from "./listingBlockQuery";
import { ListingBlockContextProvider } from "./listingContext";
import Section from "@components/Section/Section";

const getWidth = (props: ListingBlogResult) => {
  const { contentType, personItems } = props;
  if (contentType === "persons") {
    return personItems && personItems.length > 3 ? "full" : "m";
  }
  if (contentType === "custom") return "l";
  return "full";
};

const ListingBlock: React.FC<ListingBlogResult> = (props) => {
  const { contentType, bgColor, bottomSpace, topSpace } = props;

  return (
    <Section
      width={getWidth(props)}
      bg={bgColor}
      bottomSpace={bottomSpace}
      topSpace={topSpace}
    >
      <ListingBlockContextProvider {...props}>
        {contentType === "testimonials" && <TestimonialList />}
        {contentType === "persons" && <PersonList />}
        {contentType === "event" && <EventsList />}
        {contentType === "custom" && <CustomList />}
      </ListingBlockContextProvider>
    </Section>
  );
};
export default ListingBlock;
