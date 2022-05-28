import * as React from "react";
import { Animation } from "./Animation";

export const Message: React.FC<{ icon: React.ReactElement }> = ({
  children,
  icon,
}) => {
  return (
    <Animation className="grid grid-rows-[100px_1fr] md:grid-rows-1 md:grid-cols-[200px_1fr] items-center justify-items-center">
      <div>{icon}</div>
      <div>{children}</div>
    </Animation>
  );
};
