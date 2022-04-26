// import React from "react";
// const isBrowser = typeof window !== "undefined";

// export const BreakingPoints = {
//   _: 640,
//   sm: 768,
//   md: 1024,
//   lg: 1280,
//   xl: 1536,
//   "2xl": 1000000,
// };

// const useBreakingPoints = () => {
//   const [state, setState] = React.useState<[string, number]>(["_", 0]);

//   React.useEffect(() => {
//     if (!isBrowser) return;
//     const handler = () => {
//       const vw = Math.max(
//         document.documentElement.clientWidth || 0,
//         window.innerWidth || 0
//       );

//       const p = Object.entries(BreakingPoints).find(([_, val]) => vw < val);

//       if (p && state[0] !== p[0]) {
//         setState(p);
//       }
//     };
//     handler();
//     window.addEventListener("resize", handler);
//     return () => {
//       window.removeEventListener("resize", handler);
//     };
//   }, [state, setState]);

//   return state;
// };

// export default useBreakingPoints;
export {};
