import { richTextQueryShort } from "@components/RichText/richTextQuery";

export const EventsListQuery = (locale?: string) => `

`;

type EventsListItemQueryFunction = (locale?: string) => string;

export const EventsListItemQuery: EventsListItemQueryFunction = (locale) => {
  return `
  _type,
  _id,
  'tags': tags._ref,
  'content':coalesce(content_${locale}[]{${richTextQueryShort(
    locale
  )}},content[]{${richTextQueryShort(locale)}}),
  'name':coalesce(name_${locale},name),
  'description':coalesce(description_${locale},description),
  link,
  date,
  endDate,
`;
};

export type EventsListItemResult = {
  content?: any;
  name?: string | null;
  description?: string | null;
  link?: string;
  date?: string;
  endDate?: string;
  tags?: string;
  _id: string;
};
