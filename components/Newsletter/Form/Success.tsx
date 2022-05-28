import * as React from "react";
import Typo from "../../Typography/Typography";
import { Message } from "./Message";
import Rocket from "./rocket";

export const Success = () => {
  return (
    <Message icon={<Rocket />}>
      <Typo variant="h2" className="text-primary">
        SUCCESS
      </Typo>
      <Typo>A confirmation e-mail has landed in your inbox.</Typo>
    </Message>
  );
};
