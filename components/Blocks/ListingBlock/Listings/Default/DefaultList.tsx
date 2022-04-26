import React from "react";

import DefaultListItem from "./DefaultListItem";
import Filter from "../shared/Filter";

import { useRouter } from "next/router";
import Section from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import { DefaultListItemResult } from "./defaultListQuery";

interface DefaultListProps {
  title?: string | null;
  items?: DefaultListItemResult[];
  filterItems?: { label: string; value: string }[];
}

const DefaultList: React.FC<DefaultListProps> = (props) => {
  const { items = [], title, filterItems } = props;
  const { locale } = useRouter();
  const [filter, setFilter] = React.useState("all");
  const filteredItems = items?.filter((i) =>
    filter === "all" ? true : i.tags === filter
  );

  return (
    <Section width="l" data-testid="DefaultList">
      {title && (
        <Typo variant="h2" space={false} className="py-16 ">
          {title}
        </Typo>
      )}
      <ul className="grid grid-cols-1 gap-32 pb-32">
        {filterItems && (
          <Filter
            active={filter}
            onChange={(item) => setFilter(item.value)}
            items={filterItems}
          />
        )}
        {filteredItems.map((i, index) => (
          <DefaultListItem
            locale={locale}
            key={i._id}
            position={index % 2 === 0 ? "right" : "left"}
            {...i}
          />
        ))}
      </ul>
    </Section>
  );
};

export default DefaultList;
