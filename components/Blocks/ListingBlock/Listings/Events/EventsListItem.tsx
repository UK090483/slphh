import React from "react";
import Button from "@components/Button/Button";
import RichText from "@components/RichText/RichText";
import Typo from "@components/Typography/Typography";
import { registerNow } from "@constants/translations";

import { EventsListItemResult } from "./EventsListQuery";
import useAccordion from "@hooks/useAccordion/useAccordion";

interface IEventsListItemProps extends EventsListItemResult {
  accordion?: boolean;
  locale?: string;
  done?: boolean | null;
}

const EventsListItem: React.FunctionComponent<IEventsListItemProps> = (
  props
) => {
  const {
    name,
    description,
    content,
    accordion = true,
    link,
    date,
    endDate,
    locale,
    done,
  } = props;

  const hasContent = !!(content && content.length > 0);
  const { ref, maxHeight, toggle, isOpen } = useAccordion();

  return (
    <li
      data-testid="EventsListItem"
      className={` border-black border-t-2 ${hasContent ? "mb-20" : "mb-10"} ${
        done ? "opacity-60" : ""
      }`}
    >
      <div className="container  lg:max-w-screen-lg mx-auto px-5 my-12">
        <Typo variant="body-l" bold={false} space={false}>
          {date && date} {endDate && " - " + endDate}
          {done && " (Done)"}
        </Typo>
        <Typo variant="h3">{name}</Typo>
        <Typo>{description}</Typo>
        <div
          style={{
            maxHeight: accordion ? maxHeight : undefined,
            transition: "max-height 1s",
          }}
          className=" overflow-hidden"
        >
          <div ref={ref}>
            <RichText content={content} />
          </div>
        </div>

        <div className=" w-full flex justify-between items-center">
          {link && !done && (
            <Button href={link} external={true}>
              {registerNow[locale || "de"]}
            </Button>
          )}
          {accordion && hasContent && (
            <button onClick={toggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={`inline-block  stroke-current fill-current  border-2 rounded-full w-9 h-9 md:w-11 md:h-11 p-1.5 border-black ${
                  isOpen ? "rotate-90 " : "-rotate-90"
                }`}
              >
                <path fill="none" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default EventsListItem;
