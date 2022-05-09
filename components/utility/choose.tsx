type InputType = string | null | undefined;

type ListType<T> = T | "none";

function choose<Type extends InputType>(
  value: Type,
  comp: Partial<Record<string, Type | ListType<Type>[]>>
): string {
  const res: string[] = [];
  Object.entries(comp).forEach(([key, val]) => {
    if (typeof val === "string" && val === value) {
      return res.push(key);
    }
    if (
      Array.isArray(val) &&
      (val.includes(value) || (!!!value && val.includes("none")))
    ) {
      return res.push(key);
    }
  });

  return res.join(" ");
}

export default choose;
