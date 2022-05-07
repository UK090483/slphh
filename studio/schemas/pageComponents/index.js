import Section from "./Section";
import defaultRichText from "./defaultRichText";
import hero from "./hero";
import easyRichText from "./easyRichText";
import listing from "./listing";
import objects from "./objects";

const PageComponents = [
  ...objects,
  Section,
  ...listing,
  defaultRichText,
  hero,
  easyRichText,
];

export default PageComponents;
