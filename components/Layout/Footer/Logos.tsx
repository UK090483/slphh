import { useAppContext } from "@components/AppContext";
import SanityImage from "@lib/SanityImage";

const Logos: React.FC = (props) => {
  const { data } = useAppContext();

  const items = data?.footer?.logos;

  return (
    <div className="flex w-full justify-center">
      {items &&
        items.map((i, index) => {
          if (!i) return null;
          return (
            <div key={i._key} className={`relative`}>
              {i.text && <div className=" text-sm pb-4 ">{i.text}</div>}
              <SanityImage image={i.image} width={200} filter={false} />
            </div>
          );
        })}
    </div>
  );
};

export default Logos;
