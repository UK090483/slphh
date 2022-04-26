import { useMemo } from "react";
type useEventDateProps = {
  start?: string | null;
  end?: string | null;
};

const useEventDate = (props: useEventDateProps) => {
  const { start, end } = props;
  const startDate = useMemo(() => start && new Date(start), [start]);
  const endDate = useMemo(() => end && new Date(end), [end]);
  const startDateString = useMemo(
    () => startDate && startDate.toLocaleDateString("de"),
    [startDate]
  );
  const endDateString = useMemo(
    () => endDate && endDate.toLocaleDateString("de"),
    [endDate]
  );
  const isOver = useMemo(() => {
    const startOver = startDate && startDate.getTime() < Date.now();
    const endDateOver = endDate && endDate.getTime() < Date.now();
    return endDate ? endDateOver : startOver;
  }, [startDate, endDate]);
  return { startDate: startDateString, endDate: endDateString, isOver };
};

export default useEventDate;
