import Typo from "@components/Typography/Typography";
import SanityRichText, {
  SanityBlock,
} from "@lib/SanityPageBuilder/lib/RichText";
import dynamic from "next/dynamic";
import React from "react";
import List from "./list/List";
import link from "./marks/link";
import AutoGalleryPlug from "./Plugs/AutoGalleryPlug/AutoGalleryPlug";
import EmbedHTML from "./Plugs/EmbedHTML/EmbedHTML";
import EventPlug from "./Plugs/EventPlug/EventPlug";
import ImagePlug from "./Plugs/ImagePlug/ImagePlug";
import SeoTextPlug from "./Plugs/SeoTextPlug";
import SpacerPlug from "./Plugs/Spacer";
const ImageGalleryPlug = dynamic(
  () => import("./Plugs/ImageGalleryPlug/ImageGalleryPlug")
);
const PlayerPlug = dynamic(() => import("./Plugs/PlayerPlug/PlayerPlug"));

const styles: { [k: string]: string } = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  normal: "body",
};

type RichTextPros = {
  content?: SanityBlock[];
};

const RichText: React.FC<RichTextPros> = (props: any) => {
  return (
    <SanityRichText
      list={List}
      content={props.content}
      plugs={{
        imageGalleryPlug: ImageGalleryPlug,
        spacer: SpacerPlug,
        imagePlug: ImagePlug,
        eventPlug: EventPlug,
        embedHTML: EmbedHTML,
        seoText: SeoTextPlug,
        playerPlug: PlayerPlug,
        autoGalleryPlug: AutoGalleryPlug,
      }}
      marks={{ link }}
      blockRenderer={(props) => {
        const { style = "normal" } = props.node;

        if (!props.children[0]) {
          return <Typo spacer />;
        }
        if (styles[style]) {
          return <Typo variant={styles[style]}>{props.children}</Typo>;
        }

        if (style === "blockquote") {
          return <blockquote>- {props.children}</blockquote>;
        }
      }}
    />
  );
};

export default RichText;
