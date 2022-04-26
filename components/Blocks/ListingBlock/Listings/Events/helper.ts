import { EventsListItemResult } from "./EventsListQuery";

export const isDone = (
  item: Pick<EventsListItemResult, "date" | "endDate">,
  now: string
) => {
  if (!item.date) return false;
  return item.endDate ? item.endDate < now : item.date < now;
};

export const parseDate = (date: string | undefined) => {
  if (!date) return undefined;
  const d = new Date(date).toLocaleDateString("de");
  if (d === "Invalid Date") return undefined;
  return d;
};

export const parseItem = (item: EventsListItemResult, now: string) => ({
  ...item,
  date: parseDate(item.date),
  endDate: parseDate(item.endDate),
  done: isDone(item, now),
});

type PrepareItems = (
  items: EventsListItemResult[]
) => (EventsListItemResult & { done: boolean })[];

export const prepareItems: PrepareItems = (items) => {
  const now = new Date().toISOString().slice(0, 10);
  return items.map((item) => parseItem(item, now));
};
