import Portal from "@components/Portal";
import { ImageMetaResult } from "@lib/SanityImage/query";
import * as React from "react";
import { PlugProps } from "../type";
import AutoGalleryPlugItem from "./AutoGalleryPlugItem";
import { AutoGalleryPlugQueryResult } from "./AutoGalleryPlugQuery";
import { LightBox } from "./LightBox";

interface IAutoGalleryPlugProps extends AutoGalleryPlugQueryResult {}

const AutoGalleryPlug: React.FC<PlugProps<IAutoGalleryPlugProps>> = (props) => {
  const { items } = props.node;

  const [open, SetOpen] = React.useState<number | null>(null);

  return (
    <>
      <ul className="columns-2 lg:columns-4 gap-3 ">
        {items &&
          items.map((item, index) => (
            <AutoGalleryPlugItem
              variant="grid-3"
              key={item._key}
              {...item}
              onClick={() => {
                SetOpen(index);
              }}
            />
          ))}
      </ul>
      {open && (
        <Portal>
          <LightBox
            items={items}
            initialIndex={open}
            onClose={() => SetOpen(null)}
          />
        </Portal>
      )}
    </>
  );
};

export default AutoGalleryPlug;
