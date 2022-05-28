import * as React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export const Animation: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      className={clsx("min-h-[300px]", className)}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
