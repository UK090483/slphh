import {
  EventsListItemQuery,
  EventsListItemResult,
} from "@components/Blocks/ListingBlock/Listings/Events/EventsListQuery";

const eventPlugQuery = (locale?: string) => {
  return `
  _type == "eventPlug" => {
   'items': *[_type == 'event' && references(^.includeTags[]._ref) ] | order(eventItems[0].startDate asc)[] {${EventsListItemQuery(
     locale
   )}}
  }
  `;
};

export type EventPlugQueryResult = {
  items: EventsListItemResult[];
};

export default eventPlugQuery;
