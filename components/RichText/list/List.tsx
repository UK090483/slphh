import * as React from "react";

interface IListProps {
  type?: string;
}

const List: React.FC<IListProps> = (props: any) => {
  return (
    <ul
      data-testid="list"
      className={`${
        props?.type === "number" ? "list-decimal" : "list-disc"
      } list-outside pl-[2em] lg:pl-[3em] marker: pb-4`}
    >
      {props.children}
    </ul>
  );
};

export default List;
