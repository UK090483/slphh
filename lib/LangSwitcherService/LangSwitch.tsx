import Link from "@components/Link";
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
    <div className={`flex ${className} pr-2 gap-4 `}>
      {items.map((item) => {
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
            className={` w-9 h-9 flex items-center justify-center rounded-full font-bold border-2  border-primary  leading-none hover:underline ${
              item.locale === locale ? "text-white bg-primary" : "text-primary"
            } `}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};
