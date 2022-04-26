import * as React from "react";

interface ISkitToContentProps {
  containerId: string;
}

const SkipToContent: React.FunctionComponent<ISkitToContentProps> = (props) => {
  const { containerId } = props;
  const handleClick = () => {
    const element = document.querySelector(`#${containerId}`);
    if (!element) return;
    const focusable = element.querySelectorAll<
      HTMLButtonElement | HTMLAnchorElement | HTMLInputElement
    >(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusable || focusable.length < 1) return;

    try {
      focusable[0].focus();
    } catch (error) {}

    console.log(" nothing focusable");
  };
  return (
    <button
      onClick={handleClick}
      className="fixed top-3 -left-96 p-3 z-[10000] bg-gray-400  focus:left-3 "
    >
      Skip to content
    </button>
  );
};

export default SkipToContent;
