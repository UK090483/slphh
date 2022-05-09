import Link from "@components/Link";
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
import { LangSwitcherResult } from "./LangSwitcherQuery";

export interface LangSwitchProps {
  className?: string;
  slugs?: LangSwitcherResult["langSwitchData"];
  onClick?: () => void;
}

const defaultItems = [
  { label: "DE", locale: "de" },
  { label: "EN", locale: "en" },
];

const langAriaMap: { [k: string]: string } = {
  de: "Deutsch",
  en: "English",
  da: "Dansk",
};
export const LangSwitch: React.FC<LangSwitchProps> = (props) => {
  const { className, slugs, onClick = () => {} } = props;
  const items = defaultItems;
  const { locale } = useRouter();

  return (
    <div className={`flex ${className}  items-center justify-center `}>
      {items.map((item, index) => {
        return (
          <Link
            aria-label={langAriaMap[item.locale]}
            onClick={onClick}
            scroll={false}
            key={item.locale}
            href={
              (slugs && (slugs[`href_${item.locale}`] || slugs[`href`])) || "/"
            }
            locale={item.locale}
            className={clsx(
              ` w-9 h-5 flex justify-center items-center   leading-none hover:underline `,
              {
                " font-bold": item.locale === locale,
              },
              {
                " border-r-[1px] border-black": index !== items.length - 1,
              }
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};
