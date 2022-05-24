import Typo from "@components/Typography/Typography";
import useFetch from "@hooks/useFetch";
import Image from "next/image";
import { RssFeetItem } from "pages/api/rss";
import * as React from "react";
import { PlugProps } from "../type";

interface IRssEmbedPlugProps {
  link?: string;
}

const RssEmbedPlug: React.FunctionComponent<PlugProps<IRssEmbedPlugProps>> = (
  props
) => {
  const { data } = useFetch<RssFeetItem[]>("api/rss");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {data && data.map((i) => <Item key={i.id} {...i} />)}
    </div>
  );
};

export default RssEmbedPlug;

const Item: React.FC<RssFeetItem> = (props) => {
  const { title, imageUrl, link } = props;

  const hasImage = !!imageUrl;
  return (
    <a href={link}>
      {hasImage && (
        <div className="relative w-full aspect-w-3 aspect-h-2 ">
          <Image
            src={imageUrl}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <Typo space={false} className="pt-6 " variant={"h4"} bold>
        {title}
      </Typo>
    </a>
  );
};
