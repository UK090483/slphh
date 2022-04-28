import * as React from "react";
import { PlugProps } from "../type";
import Phase from "./Phase";
import TrustPlugItem from "./TrustPlug.Item";
import { TrustPlugQueryResult } from "./TrustPlugQuery";

interface ITrustProps extends TrustPlugQueryResult {}

const Trust: React.FunctionComponent<PlugProps<ITrustProps>> = (props) => {
  const { items, variation } = props.node;

  if (variation === "phases") {
    return <Phase {...props} />;
  }

  return (
    <div className="grid justify-items-center gap-4  grid-cols-1 md:grid-cols-2">
      {items?.map((i) => (
        <TrustPlugItem key={i._key} {...i} />
      ))}
    </div>
  );
};

export default Trust;
