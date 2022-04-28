import { useAppContext } from "@components/AppContext";
import Link from "@components/Link";

const Social: React.FC = () => {
  const { data } = useAppContext();
  const items = data?.footer?.socialMedia;
  return (
    <div className="w-full flex justify-center gap-6">
      {items &&
        items.map((i) =>
          i ? (
            <Link
              external={true}
              href={i.url || "/"}
              key={i._key}
              aria-label={`Social media Link ${i.icon}`}
            >
              <Icon icon={i.icon}></Icon>
            </Link>
          ) : null
        )}
    </div>
  );
};

export default Social;

const pathMap = {
  instagram: (
    <>
      <path
        d="M59.7917 32.2764C57.3723 32.1712 56.636 32.1361 50.4999 32.1361C44.3639 32.1361 43.6276 32.1536 41.2082 32.2764C34.967 32.5569 32.0743 35.5197 31.7762 41.7083C31.671 44.1277 31.636 44.864 31.636 51.0001C31.636 57.1361 31.6535 57.8724 31.7762 60.2918C32.0567 66.4629 34.9495 69.4257 41.2082 69.7238C43.6276 69.829 44.3639 69.864 50.4999 69.864C56.636 69.864 57.3723 69.8465 59.7917 69.7238C66.0329 69.4433 68.9256 66.4804 69.2236 60.2918C69.3288 57.8724 69.3639 57.1361 69.3639 51.0001C69.3639 44.864 69.3464 44.1277 69.2236 41.7083C68.9431 35.5197 66.0329 32.5744 59.7917 32.2764ZM50.4999 62.8163C43.9782 62.8163 38.7012 57.5218 38.7012 51.0001C38.7012 44.4783 43.9957 39.2013 50.4999 39.2013C57.0042 39.2013 62.2987 44.4959 62.2987 51.0001C62.2987 57.5218 57.0217 62.8163 50.4999 62.8163ZM62.772 41.4804C61.2468 41.4804 60.0196 40.2532 60.0196 38.728C60.0196 37.2027 61.2468 35.9755 62.772 35.9755C64.2973 35.9755 65.5245 37.2027 65.5245 38.728C65.5245 40.2532 64.2973 41.4804 62.772 41.4804Z"
        strokeMiterlimit="10"
      />
      <path
        d="M50.4999 58.6613C54.7311 58.6613 58.1612 55.2313 58.1612 51C58.1612 46.7688 54.7311 43.3387 50.4999 43.3387C46.2687 43.3387 42.8386 46.7688 42.8386 51C42.8386 55.2313 46.2687 58.6613 50.4999 58.6613Z"
        strokeMiterlimit="10"
      />
      <path
        d="M50.5 1C22.8878 1 0.5 23.3878 0.5 51C0.5 78.6122 22.8878 101 50.5 101C78.1122 101 100.5 78.6122 100.5 51C100.5 23.3878 78.1122 1 50.5 1ZM73.3611 60.4846C72.9755 68.8471 68.3296 73.4755 59.9846 73.8611C57.5302 73.9663 56.7412 74.0014 50.5 74.0014C44.2588 74.0014 43.4698 73.9663 41.0154 73.8611C32.6529 73.4755 28.0245 68.8296 27.6388 60.4846C27.5337 58.0302 27.4986 57.2412 27.4986 51C27.4986 44.7588 27.5337 43.9698 27.6388 41.5154C28.0245 33.1529 32.6704 28.5245 41.0154 28.1388C43.4698 28.0337 44.2412 27.9986 50.5 27.9986C56.7588 27.9986 57.5302 28.0337 59.9846 28.1388C68.3471 28.5245 72.9755 33.1704 73.3611 41.5154C73.4663 43.9698 73.5014 44.7412 73.5014 51C73.5014 57.2412 73.4663 58.0302 73.3611 60.4846Z"
        strokeMiterlimit="10"
      />
    </>
  ),
  facebook: (
    <path
      d="M50.5 0.5C22.8878 0.5 0.5 22.8878 0.5 50.5C0.5 78.1122 22.8878 100.5 50.5 100.5C78.1122 100.5 100.5 78.1122 100.5 50.5C100.5 22.8878 78.1122 0.5 50.5 0.5ZM63.4558 35.3703H57.2146C55.216 35.3703 54.8128 36.1942 54.8128 38.2454V41.8394H63.4558L62.6844 50.4825H54.8128V76.4116H44.0133V50.5H37.5266V41.8569H44.0133V34.5463C44.0133 27.9895 47.467 24.5708 55.2335 24.5708H63.4558V35.3703Z"
      strokeMiterlimit="10"
    />
  ),
  twitter: (
    <path
      d="M50.5 1C22.8878 1 0.5 23.3878 0.5 51C0.5 78.6122 22.8878 101 50.5 101C78.1122 101 100.5 78.6122 100.5 51C100.5 23.3878 78.1122 1 50.5 1ZM73.028 39.4467C73.7644 55.7861 61.5799 74.0189 39.9986 74.0189C33.4418 74.0189 27.3233 72.0905 22.1865 68.7945C28.3576 69.5133 34.5112 67.8128 39.385 63.9734C34.3008 63.8857 30.0056 60.5196 28.533 55.9088C30.3562 56.2595 32.1445 56.1543 33.7749 55.716C28.1823 54.594 24.3254 49.5624 24.4481 44.1802C26.0084 45.0568 27.8142 45.5652 29.7076 45.6353C24.5358 42.1816 23.0631 35.3443 26.1136 30.1199C31.8464 37.1501 40.4018 41.7784 50.0617 42.2518C48.3611 34.9937 53.8836 27.9811 61.3871 27.9811C64.7356 27.9811 67.7511 29.3836 69.8724 31.6452C72.5196 31.1192 75.0091 30.155 77.2532 28.8226C76.3941 31.54 74.5358 33.8191 72.1515 35.2567C74.5007 34.9762 76.7447 34.345 78.831 33.4334C77.2532 35.7651 75.2896 37.8163 73.028 39.4467Z"
      strokeMiterlimit="10"
    />
  ),

  youtube: (
    <>
      <path d="M37.7007 1.5061C14.4536 7.93822 0 26.7321 0 50.2495C0 70.2494 10.0064 86.3297 27.6944 95.0734C55.8941 108.943 89.8551 93.9679 98.5475 63.9178C100.973 55.6766 100.266 39.8978 97.1324 31.8577C92.2809 19.3954 80.3541 8.03873 67.0123 3.01363C59.4317 0.0990721 45.1802 -0.604441 37.7007 1.5061ZM75.6036 30.0487C80.5563 32.6617 81.3649 35.5763 81.2638 50.2495C81.1627 70.6514 80.6573 71.2545 59.4317 72.0585C51.4468 72.36 40.4297 72.2595 34.9717 71.8575C25.9761 71.2544 24.6621 70.8524 22.2364 68.4404C19.9116 66.2293 19.4063 64.6213 18.7998 57.9882C18.3955 53.7671 18.3955 46.8325 18.7998 42.6114C19.7095 32.6617 21.731 30.0487 29.4126 29.0436C38.004 27.8376 72.9757 28.6416 75.6036 30.0487Z" />
      <path d="M43.462 50.35C43.462 55.3751 43.8663 59.2947 44.3716 59.0937C46.4942 58.3902 59.6339 50.752 59.6339 50.2495C59.6339 49.747 44.877 41.2044 43.9673 41.2044C43.6641 41.2044 43.462 45.3249 43.462 50.35Z" />
    </>
  ),
};

type IconProps = {
  icon?: keyof typeof pathMap | string | null;
};
const Icon = (props: IconProps) => {
  const { icon } = props;
  //@ts-ignore
  const _path = icon && pathMap[icon];
  const className = "w-12 h-12   fill-primary ";
  if (!_path) return null;
  return (
    <svg
      role="img"
      aria-label={`${icon} Logo`}
      viewBox="0 0 101 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {_path}
    </svg>
  );
};
