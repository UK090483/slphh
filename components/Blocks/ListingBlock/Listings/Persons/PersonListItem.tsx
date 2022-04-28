import Typo from "@components/Typography/Typography";
import SanityImage from "@lib/SanityImage";
import type { ImageMetaResult } from "@lib/SanityImage/query";
import ReactTooltip from "react-tooltip";

import * as React from "react";
import { readMore } from "@constants/translations";
import { useRouter } from "next/router";

interface IPersonListItemProps {
  name?: null | string;
  position?: null | string;
  description?: null | string;
  avatar?: null | ImageMetaResult;
  variant?: string | null;
  _id: string;
}

const PersonListItem: React.FunctionComponent<IPersonListItemProps> = (
  props
) => {
  const { name, description, position, avatar, _id, variant } = props;

  const { locale } = useRouter();

  const isImage = variant === "image";
  const readMoreText = locale ? readMore[locale] : "mehr Erfahren";

  return (
    <li className="flex flex-col items-center justify-center sm:min-w-[250px] w-full   sm:w-1/4 py-8 self-start ">
      <div className="tooltip hidden" />
      <div
        className={`relative h-60  overflow-hidden ${
          isImage
            ? "w-full border-[10px] border-transparent "
            : "rounded-full w-60"
        } `}
      >
        <SanityImage
          image={avatar}
          objectFit={isImage ? "contain" : "cover"}
          sizes={"350px"}
        />
      </div>

      <div className="pt-3 h-12 ">
        <Typo
          bold
          variant="h5"
          as="h3"
          space={false}
          className="uppercase text-center text-primary"
        >
          {name}
        </Typo>
      </div>
      <Typo className="whitespace-pre-line text-center w-60">{position}</Typo>
      {description && (
        <>
          <button
            className="underline text-sm sm:text-base"
            data-tip
            data-for={_id}
          >
            {readMoreText}
          </button>
          <ReactTooltip
            overridePosition={(position) => {
              const wWidth = window.innerWidth;
              const needFitLeft = position.left < 0;
              const needFitRight = position.left + 280 > wWidth;
              const needFitTop = position.top < 0;
              let p = { ...position };
              if (needFitLeft) {
                p = { ...p, left: 20 };
              }
              if (needFitRight) {
                p = { ...p, left: wWidth - 300 };
              }
              if (needFitTop) {
                p = { ...p, top: 20 };
              }
              return p;
            }}
            id={_id}
            effect="float"
            multiline={true}
            className="tooltip"
          >
            {description}
          </ReactTooltip>{" "}
        </>
      )}
    </li>
  );
};

export default PersonListItem;
