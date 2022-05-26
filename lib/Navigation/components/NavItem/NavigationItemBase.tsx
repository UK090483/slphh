import clsx from "clsx";

export type NavItemBaseProps = {
  icon?: boolean;
  hover?: boolean;
  bold?: boolean;
  place?: "link" | "dropdown" | "header" | "dropdown/link" | "mobile/link";
  props: { [k: string]: any };
  active: boolean;
  index?: number;
};

export const NavigationItemBase: React.FC<NavItemBaseProps> = ({
  children,
  icon,
  hover,
  bold,
  place,
  index,
  active,
}) => {
  const _index = index || 0;

  return (
    <span
      style={{
        animationDuration: `${175 * (_index + 2)}ms`,
        animationTimingFunction: "ease-out",
      }}
      className={clsx(
        `block w-full px-7 py-2 leading-none  whitespace-nowrap transition-colors  font-bold text-base-mobile xl:text-base truncate`,
        {
          menuItem: true,
          active: active,
          "no-underline  ": true,
          "hover:bg-black ": place === "dropdown/link",
          "font-bold": bold,
          "text-3xl-mobile pl-3 pt-5 animate-slideInMobileMenu ":
            place === "mobile/link",
        }
      )}
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
