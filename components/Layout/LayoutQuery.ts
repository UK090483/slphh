import NavigationQuery, { NavigationResult } from "@lib/Navigation/query";
import { footerQuery, FooterQueryResult } from "./Footer/FooterQuery";
import type { LangSwitcherResult } from "@lib/LangSwitcherService/LangSwitcherQuery";
import LangSwitcherQuery from "@lib/LangSwitcherService/LangSwitcherQuery";
import type { SeoResult } from "@lib/SeoService/SeoQuery";
import seoQuery from "@lib/SeoService/SeoQuery";

import appConfig from "../../app.config.json";

const layoutQuery = (locale?: string) => `
'footer': {${footerQuery(locale)}},
${NavigationQuery(locale)},
${LangSwitcherQuery(appConfig.locales)},
${seoQuery(locale)}
`;

export type layoutQueryResult = {
  footer?: FooterQueryResult;
  navigation?: NavigationResult;
} & LangSwitcherResult &
  SeoResult;

export default layoutQuery;
