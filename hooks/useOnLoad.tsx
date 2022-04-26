import React from "react";

type useOnLoadProps = {
  callback: () => {};
};

const isBrowser = typeof window !== undefined;

const useOnLoad = (props?: useOnLoadProps) => {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    const onLoad = () => {
      setLoaded(true);
      props?.callback && props.callback();
    };
    isBrowser && addEventListener("load", onLoad);

    return () => {
      isBrowser && removeEventListener("load", onLoad);
    };
  }, [setLoaded, props]);

  return loaded;
};

export default useOnLoad;
