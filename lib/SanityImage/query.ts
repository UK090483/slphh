export const imageMeta = `
alt,
crop,
hotspot,
'url':asset->url,
"id": asset->assetId,
"type": asset->mimeType,
"aspectRatio": asset->metadata.dimensions.aspectRatio,
"lqip": asset->metadata.lqip,
'width': asset->metadata.dimensions.width,
'height': asset->metadata.dimensions.height
`;

export const imageMetaN = `
alt,
crop,
hotspot,
'asset':asset->{
  url,
  _id,
  'metadata':metadata{dimensions,liq},
},
'url':asset->url,
"id": asset->assetId,
"type": asset->mimeType,
"aspectRatio": asset->metadata.dimensions.aspectRatio,
"lqip": asset->metadata.lqip,
'width': asset->metadata.dimensions.width,
'height': asset->metadata.dimensions.height
`;

export type ImageMetaResult = {
  alt: string | null;
  url?: string | null;
  hotspot?: { x: number; y: number } | null;
  crop?: { bottom: number; top: number; right: number; left: number } | null;
  id: string;
  type: string;
  aspectRatio: number;
  width: number;
  height: number;
  lqip: string;
  fill?: "fill" | "contain";
  // asset?: {
  //   url?: string | null;
  //   _id: string;
  //   metadata: {
  //     lqip: string;
  //     dimensions: {
  //       aspectRatio: number;
  //       width: number;
  //       height: number;
  //     };
  //   };
  // };
};
