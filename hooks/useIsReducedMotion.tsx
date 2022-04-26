const support =
  typeof window !== "undefined" && typeof window.matchMedia === "function";
const useIsReducedMotion = () => {
  // Return false if no support
  if (!support) return false;
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  return mediaQuery && mediaQuery.matches;
};

export default useIsReducedMotion;
