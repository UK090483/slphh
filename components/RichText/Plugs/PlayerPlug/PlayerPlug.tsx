import clsx from "clsx";
import { PlugProps } from "@lib/SanityPageBuilder/lib/RichText";
import React from "react";
import ReactPlayer from "react-player/lazy";

interface IPlayerPlugProps {
  url?: string | null;
  customWidth?: "1/4" | "1/3" | "1/2" | "2/3" | "full";
}

const PlayerPlug: React.FC<PlugProps<IPlayerPlugProps>> = (props) => {
  const { url, customWidth = "2/3" } = props.node;

  if (!url) return null;

  return (
    <div
      className={clsx(" mx-auto  mb-6 md:mb-12", {
        "w-full sm:w-1/4": customWidth === "1/4",
        "w-full sm:w-1/3": customWidth === "1/3",
        "w-full sm:w-1/2": customWidth === "1/2",
        "w-full sm:w-2/3": customWidth === "2/3",
        "w-full": customWidth === "full",
      })}
    >
      <div className=" aspect-w-16  aspect-h-9 ">
        <ReactPlayer width="100%" height="100%" url={url} />
      </div>
    </div>
  );
};

export default PlayerPlug;
