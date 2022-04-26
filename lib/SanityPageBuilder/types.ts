import {
  NextPage,
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  PreviewData,
} from "next";
import { ComponentType } from "react";

import type { SanityClient } from "@sanity/client/sanityClient";
import { ParsedUrlQuery } from "querystring";

export type SPBComponent = {
  name: string;
  component: ComponentType<any>;
  query: string | ((locale: string) => string);
};

type Revalidate = number | boolean;

export type SPBOptions = {
  components: SPBComponent[];
  client: SanityClient;
  locales: LocationConfig;
  query?: string;
  getQuery?: (
    props: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
  ) => string;
  revalidate?: Revalidate;
};

export type SPBResult<P> = {
  PageComponent: NextPage<FetchStaticPropsResult<any>["props"]>;
  getStaticPaths: GetStaticPaths;
  getStaticProps: GetStaticProps<P>;
};

export type FetchStaticPathsParams = {
  slug?: string[];
};
export type FetchStaticPathsResult = {
  paths: { params: FetchStaticPathsParams; locale: string }[];
  fallback: boolean;
};

export type FetchStaticPathsResult2 =
  GetStaticPathsResult<FetchStaticPathsParams>;

export type FetchStaticPathsProps = {
  doc: string;
  client: SanityClient;
  locales?: LocationConfig;
  query?: string;
  fallback?: boolean | "blocking";
};

export type FetchStaticPaths = (
  props: FetchStaticPathsProps
) => Promise<FetchStaticPathsResult2>;

export type fetchStaticPropsProps = {
  locale?: string;
  params?: FetchStaticPathsParams;
  preview?: boolean;
  client: SanityClient;
  locales: LocationConfig;
  query: string;
  previewQuery?: string;
  revalidate?: Revalidate;
};

export type PageProps<P> = {
  data: P | null;
  preview?: boolean;
  query: string;
  id: string;
  [k: string]: any;
};

export type FetchStaticPropsResult<P> = {
  props: PageProps<P>;
};

export type LocationConfig = {
  [locale: string]: { title: string; isDefault?: boolean; flag?: string };
};
