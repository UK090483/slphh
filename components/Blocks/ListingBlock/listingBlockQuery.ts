import {
  customListItemQuery,
  customListItemResult,
} from "./Listings/Custom/customListQuery";
import {
  defaultListItemQuery,
  DefaultListItemResult,
} from "./Listings/Default/defaultListQuery";
import {
  EventsListItemQuery,
  EventsListItemResult,
} from "./Listings/Events/EventsListQuery";
import {
  personItemQuery,
  PersonItemResult,
} from "./Listings/Persons/PersonListQuery";
import {
  TestimonialItemResult,
  testimonialItemQuery,
} from "./Listings/Testimonials/testimonialQuery";

import { DecorationSettings } from "@components/Section/Decoration/Decoration";
import { SectionBGColor, SectionSpace } from "@components/Section/Section";

const isDocumentation =
  'pageType._ref == "88e611ea-581e-48c4-b63c-13e1084acf4f"';

const listingBlockQuery = (locale: string = "") => `
_type == "listing" => {
  ...,
  hideDoneEvents,
  eventVariant,
  _type,
  _key,
  contentType,
  showTitle,
  bgColor,
  variant,
  customVariants,
  'filterItems': select( contentType == 'event' || (contentType  == 'documentations' && !defined(documentationsIncludeTags) )  => *[_type == "tag"]{'label':coalesce(name_${locale},name),'value':_id},null ),
  'title':coalesce(title_${locale},title),
  'personItems': personItems[]->{${personItemQuery(locale)}},
  'testimonialItems': testimonialItems[]->{${testimonialItemQuery(locale)}},
  'customItems': customItems[]{${customListItemQuery(locale)}},
  'listItems':(select(
    contentType  == 'pages' => [...pagesItems[]->],
    contentType  == 'documentations' && count(documentationsIncludeTags) > 0 => *[ ${isDocumentation} && references(^.documentationsIncludeTags[]._ref ) ],
    contentType  == 'documentations' => *[ ${isDocumentation} ]
  ))[]{${defaultListItemQuery(locale)}},
  'eventItems':(select(
    contentType == 'event' && count(eventIncludeTags) > 0 => *[ _type == 'event' && references(^.eventIncludeTags[]._ref ) ]| order(date asc),
    contentType == 'event' => *[ _type == 'event']| order(date asc)
  ))[]{${EventsListItemQuery(locale)}},
}
`;

export interface ListingBlogResult {
  _type: "listing";
  _key: string;
  bgColor?: SectionBGColor;
  topSpace?: SectionSpace;
  bottomSpace?: SectionSpace;
  eventItems?: EventsListItemResult[] | null;
  customVariants?: "phases" | "list" | "iconList" | null;
  customItems?: customListItemResult[] | null;
  listItems?: DefaultListItemResult[] | null;
  contentType?:
    | "event"
    | "documentations"
    | "persons"
    | "testimonials"
    | "pages"
    | "custom";
  variant?: "grid" | "list" | "carousel";
  title?: string;
  filterItems?: { label: string; value: string }[];
  personItems?: PersonItemResult[] | null;
  testimonialItems?: TestimonialItemResult[] | null;
  showTitle?: boolean;
  eventVariant?: "open" | "accordion" | null;
  hideDoneEvents?: boolean | null;
}

export default listingBlockQuery;
