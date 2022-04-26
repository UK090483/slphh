/* eslint-disable @next/next/no-html-link-for-pages */
import { useRouter } from "next/router";
import * as React from "react";

const PreviewIndicator: React.FC<{ show: boolean }> = ({ show }) => {
  const { asPath } = useRouter();
  if (!show) return null;
  return (
    <a
      className="fixed p-3 font-bold text-red border-4 border-red rounded-md left-2 bottom-2"
      href={`/api/preview/stop?slug=${asPath}`}
    >
      Exit Preview
    </a>
  );
};

export default PreviewIndicator;
