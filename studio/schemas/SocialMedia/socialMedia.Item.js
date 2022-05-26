import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
} from "react-icons/Bs";

const socialMediaItems = [
  { title: "FaceBook", value: "facebook", icon: BsFacebook },
  { title: "Twitter", value: "twitter", icon: BsTwitter },
  { title: "Instagram", value: "instagram", icon: BsInstagram },
  { title: "Youtube", value: "youtube", icon: BsYoutube },
  { title: "LinkedIn", value: "linkedin", icon: BsLinkedin },
];

export default {
  type: "object",
  name: "socialMedia.item",

  fields: [
    {
      type: "string",
      name: "icon",
      title: "Icon",
      options: {
        list: [...socialMediaItems],
      },
    },
    {
      type: "url",
      name: "url",
      title: "Url",
    },
  ],

  preview: {
    select: {
      icon: "icon",
    },
    prepare({ icon }) {
      const socialMediaItem = socialMediaItems.find((i) => i.value === icon);
      return {
        title: socialMediaItem && socialMediaItem.title,
        media: socialMediaItem && socialMediaItem.icon,
      };
    },
  },
};
