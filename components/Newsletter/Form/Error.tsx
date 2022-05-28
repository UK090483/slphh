import * as React from "react";
import Typo from "../../Typography/Typography";
import { Animation } from "./Animation";

export const Error = () => {
  return (
    <Animation>
      <Typo>oh something went wrong...</Typo>
    </Animation>
  );
};
