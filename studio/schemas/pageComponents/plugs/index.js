import Button from "./Button";
import Spacer from "./Spacer";
import ImagPlug from "./ImagePlug";
import ImageGallery from "./ImageGallery/index";
import PlayerPlug from "./PlayerPlug";
import AutoGallery from "./AutoGallery";
import SeoText from "./SeoText";
import Trust from "./Trust";

const Plugs = [
  ...Trust,
  Button,
  Spacer,
  ImagPlug,
  ...ImageGallery,
  ...AutoGallery,
  PlayerPlug,
  SeoText,
];

export default Plugs;
