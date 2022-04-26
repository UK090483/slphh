import config from "../app.config.json";
export type AppSizes = "s" | "m" | "l" | "xl" | "xxl";
// export type ImageLayout = "fill" | "contain" | "intrinsic";
export type AppColor = keyof typeof config.colors;
export type AppLocales = keyof typeof config.locales;
export type LocationConfig = {
  [locale: string]: { title: string; isDefault?: boolean; flag?: string };
};
