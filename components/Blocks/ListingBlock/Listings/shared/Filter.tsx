import useKeyPress from "@hooks/useKeyPress";

type FilterProps = {
  items?: { label: string; value: string }[];
  active?: string;
  onChange?: (item: { label: string; value: string }) => void;
};

const Filter: React.FC<FilterProps> = (props) => {
  const { items = [], active = "all", onChange = () => {} } = props;
  const withAll = [{ label: "All", value: "all" }, ...items];

  const currentIndex = () => withAll.findIndex((i) => i.value === active);
  const nextItem = () => {
    const nextIndex = (currentIndex() + 1) % withAll.length;
    onChange(withAll[nextIndex]);
  };
  const prevItem = () => {
    const _currentIndex = currentIndex();
    const nextIndex =
      _currentIndex === 0 ? withAll.length - 1 : _currentIndex - 1;
    onChange(withAll[nextIndex]);
  };

  const targetProps = useKeyPress({
    ArrowRight: () => nextItem(),
    ArrowLeft: () => prevItem(),
    ArrowUp: () => nextItem(),
    ArrowDown: () => prevItem(),
  });

  return (
    <div
      data-testid="ListingFilter"
      {...targetProps}
      tabIndex={0}
      aria-label="Filter "
      role="radiogroup"
      className="flex items-center container  mx-auto my-12 flex-col lg:flex-row flex-wrap"
    >
      <span className=" text-2xl font-bold">Filter:</span>
      {withAll.map((i) => (
        <div
          tabIndex={-1}
          role="radio"
          aria-checked={active === i.value}
          onClick={() => onChange(i)}
          className={`uppercase text-base whitespace-nowrap border-2 border-black py-1 px-3 rounded-full first:ml-0 ml-2 mb-2 ${
            active === i.value ? "text-white bg-black" : ""
          }`}
          key={i.value}
        >
          {i.label}
        </div>
      ))}
    </div>
  );
};

export default Filter;
