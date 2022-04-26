import Typo from "@components/Typography/Typography";

export interface IEvent {
  title?: string | null;
  description?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  isSub?: boolean;
}

const Event: React.FC<IEvent> = (props) => {
  const { title, startDate, endDate, isSub, description } = props;

  return (
    <div className="w-full">
      <div className={` flex w-full justify-between ${isSub ? "pl-6" : ""}`}>
        <Typo space={false}>{title}</Typo>
        <Typo space={false}>{parseDate({ startDate, endDate })}</Typo>
      </div>
      {description && (
        <Typo className=" whitespace-pre-line bg-secondary  p-4 mb-4  rounded-theme">
          {description}
        </Typo>
      )}
    </div>
  );
};

type parseDateProps = {
  startDate?: string | null;
  endDate?: string | null;
};

const parseDate = (props: parseDateProps) => {
  const { startDate, endDate } = props;
  const _startDate = startDate && new Date(startDate);
  const _endDate = endDate && new Date(endDate);

  if (_startDate && _endDate) {
    const parsedStartDate = _startDate.toLocaleDateString("de");
    const parsedEndDate = _endDate.toLocaleDateString("de");
    const parsedStartTime = _startDate.toLocaleTimeString("de").slice(0, 5);
    const parsedEndTime = _endDate.toLocaleTimeString("de").slice(0, 5);
    const isSameDate = parsedStartDate === parsedEndDate;
    if (isSameDate) {
      return `${parsedStartDate} ${parsedStartTime}-${parsedEndTime}`;
    }
    return `${parsedStartDate}/${parsedStartTime} - ${parsedEndDate}/${parsedEndTime}`;
  }
  return "";
};

export default Event;
