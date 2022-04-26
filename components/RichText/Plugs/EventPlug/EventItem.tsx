import Typo from "@components/Typography/Typography";
import Event, { IEvent } from "./Event";

export interface IEventItem {
  eventItems: IEvent[];
  title?: string | null;
  multi?: boolean;
  description?: string | null;
}

const EventItem: React.FC<IEventItem> = (props) => {
  const { eventItems, title, multi, description } = props;

  const hasItems = eventItems && eventItems.length > 0;
  const hasMultiple = eventItems && eventItems.length > 1;

  if (!multi && hasItems) {
    return (
      <EventWrap>
        <Event {...eventItems[0]} isSub={false} />
      </EventWrap>
    );
  }
  return (
    <EventWrap>
      <div className="w-full">
        <Typo bold>{title}</Typo>
        {description && (
          <Typo className=" whitespace-pre-line bg-secondary  p-4 mb-4  rounded-theme">
            {description}
          </Typo>
        )}
        {eventItems &&
          eventItems.map((i, index) => (
            <Event key={index} {...i} isSub={true} />
          ))}
      </div>
    </EventWrap>
  );
};

export const EventWrap: React.FC = ({ children }) => {
  return (
    <div className=" bg-primary-light flex items-center py-4 px-2 mb-4 rounded-theme ">
      {children}
    </div>
  );
};

export default EventItem;
