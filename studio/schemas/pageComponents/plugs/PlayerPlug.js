import React from "react";
// import ReactPlayer from "react-player";

const Player = (props) => {
  if (!props?.value?.url) return <span>{"no url"}</span>;
  // return <ReactPlayer url={props?.value?.url} />;

  return <div>bla</div>;
};

export default {
  title: "Player",
  name: "playerPlug",
  type: "object",

  fields: [
    {
      type: "url",
      title: "Url",
      name: "url",
    },
  ],
  // preview: {
  //   select: {
  //     url: "url",
  //   },
  //   component: Player,
  // },
  preview: {
    select: {
      url: "url",
    },
    prepare({ url }) {
      return {
        title: url || "(url missing)",
      };
    },
  },
};
