import React from "react";

const useHover = () => {
  const [value, setValue] = React.useState(false);

  const onMouseOver = () => setValue(true);
  const onMouseOut = () => setValue(false);

  return [value, { onMouseOver, onMouseOut }];
};

export default useHover;
