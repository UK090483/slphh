export type NavItemBaseProps = {
  icon?: boolean;
  hover?: boolean;
  bold?: boolean;
  place?: "link" | "dropdown" | "header" | "dropdown/link";
  props: { [k: string]: any };
  active: boolean;
};

export const NavigationItemBase: React.FC<NavItemBaseProps> = ({
  children,
  icon,
  hover,
  bold,
  place,
}) => {
  return (
    <span
      className={`block w-full px-5 py-4 hover:underline decoration-2 underline-offset-2 leading-none whitespace-nowrap transition-colors duration-500 font-bold text-base-mobile xl:text-base truncate ${
        place === "dropdown/link" ? "hover:bg-black  hover:text-white " : ""
      }  ${bold ? " font-bold " : ""}  `}
    >
      {children}
      {icon && (
        <svg
          style={{ width: "1.5em", height: "1.5em" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`inline-block stroke-current transition-transform ${
            hover ? "rotate-90" : ""
          }`}
          fill="none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </span>
  );
};

export default NavigationItemBase;
