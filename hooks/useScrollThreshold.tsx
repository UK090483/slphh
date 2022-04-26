import React from "react";

export const useScrollThreshold = (threshold: number) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    const scrollTop = window.pageYOffset ?? document.documentElement.scrollTop;
    if (scrollTop > threshold && !isScrolled) {
      setIsScrolled(true);
    }
    if (scrollTop <= threshold && isScrolled) {
      setIsScrolled(false);
    }
  }, [isScrolled, threshold]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return isScrolled;
};
