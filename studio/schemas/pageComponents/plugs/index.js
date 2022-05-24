import Button from "./Button";
import Spacer from "./Spacer";
import ImagPlug from "./ImagePlug";
import ImageGallery from "./ImageGallery/index";
import PlayerPlug from "./PlayerPlug";
import AutoGallery from "./AutoGallery";
import SeoText from "./SeoText";
import List from "./List";
import Embed from "./Embed";
import Newsletter from "./Newsletter";
import RssEmbed from "./RssEmbed";

const Plugs = [
  RssEmbed,
  Newsletter,
  Embed,
  ...List,
  Button,
  Spacer,
  ImagPlug,
  ...ImageGallery,
  ...AutoGallery,
  PlayerPlug,
  SeoText,
];

export default Plugs;
