import EventsList from "@components/Blocks/ListingBlock/Listings/Events/EventsList";
import { PlugProps } from "@lib/SanityPageBuilder/lib/RichText";
import React from "react";
import { EventPlugQueryResult } from "./EventPlugQuery";

interface IEventPlugProps extends EventPlugQueryResult {}

const EventPlug: React.FC<PlugProps<IEventPlugProps>> = (props) => {
  const { items } = props.node;
  return <EventsList />;
};

export default EventPlug;
