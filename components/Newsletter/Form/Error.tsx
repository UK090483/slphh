import * as React from "react";
import Typo from "../../Typography/Typography";
import { Animation } from "./Animation";
import { Message } from "./Message";
import Rocket from "./rocket";

export const Error = () => {
  return (
    <Message
      testId="form-message-error"
      icon={<Rocket className={"rotate-180"} />}
    >
      <Typo variant="h2" className="text-primary">
        OOOPS!
      </Typo>
      <Typo space={false}>Something went wrong... </Typo>
      <Typo>are you maybe already signed up ???</Typo>
      <Typo>Try again Later!</Typo>
    </Message>
  );
};
