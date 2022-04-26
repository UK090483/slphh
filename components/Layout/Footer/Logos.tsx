import { useAppContext } from "@components/AppContext";
import SanityImage from "@lib/SanityImage";

const Logos: React.FC = (props) => {
  const { data } = useAppContext();

  const items = data?.footer?.logos;
  return (
    <div className="grid grid-cols-4 gap-12 lg:grid-cols-6">
      {items &&
        items.map((i, index) => (
          <div
            key={i._key}
            className={`relative min-h-[200px] ${
              index === 0 ? " col-span-4" : "col-span-2"
            }`}
          >
            {i.text && <div className=" text-sm pb-4 ">{i.text}</div>}

            <SanityImage image={i.image} width={500} />
          </div>
        ))}
    </div>
  );
};

export default Logos;
