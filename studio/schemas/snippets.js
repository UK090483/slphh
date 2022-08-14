export const defaultBockContent = {
  name: "content",
  type: "array",
  title: "Page sections",
  description: "Add, edit, and reorder sections",
  of: [{ type: "section" }, { type: "hero" }, { type: "listing" }],
};

const decorationList = [
  "line",
  "line-animated",
  "circle",
  "circle-animated",
  "arrow",
  "arrow-animated",
];

export const color = (override) => {
  return [
    {
      title: "Color",
      name: "color",
      type: "string",
      options: {
        list: [...colorList()],
      },
      ...override,
    },
  ];
};
export const decoration = (override) => {
  return [
    {
      title: "Decoration Left",
      name: "decorationL",
      type: "string",
      options: {
        list: decorationList,
      },
      ...override,
    },
    {
      title: "Decoration Right",
      name: "decorationR",
      type: "string",
      options: {
        list: decorationList,
      },
      ...override,
    },
  ];
};

export const space = (override) => {
  return [
    {
      title: "Top Space",
      name: "topSpace",
      type: "string",

      options: {
        list: [
          ...sizesList((i) =>
            i?.value === "m" ? { title: "m (default)", value: i.value } : i
          ),
        ],
      },
      ...override,
    },
    {
      title: "Bottom Space",
      name: "bottomSpace",
      type: "string",

      options: {
        list: [...sizesList()],
      },
      ...override,
    },
  ];
};

export function getColor(color) {
  if (!color) return;
  const colorMap = colorList().reduce((acc, item) => {
    return { ...acc, [item.value]: item.hex };
  }, {});

  return colorMap[color];
}

export function colorList(skip) {
  const list = [
    { title: "Black", value: "black", hex: "#003063" },
    { title: "White", value: "white", hex: "#FFFFFF" },
    { title: "Magenta", value: "primary", hex: "#CA497C" },
    { title: "Türkis", value: "secondary", hex: "#B8D7D7" },
    { title: "Grey", value: "grey", hex: "#ebebeb" },
  ];
  if (!Array.isArray(skip)) return list;

  return list.filter((listItem) => !skip.includes(listItem.value));
}

export function sizesList(map) {
  const list = [
    { title: "s", value: "s" },
    { title: "m", value: "m" },
    { title: "l", value: "l" },
    { title: "xl", value: "xl" },
    { title: "xxl", value: "xxl" },
  ];
  if (typeof map !== "function") return list;

  return list.map((listItem) => map(listItem)).filter((i) => !!i);
}
