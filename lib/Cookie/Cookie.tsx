import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Button from "@components/Button/Button";
import { useConsent } from "@lib/Analytics/AnalyticsContext";

const CookieBar: React.FC = () => {
  const { locale } = useRouter();
  const message =
    "Wir nutzen Cookies um Ihr Erlebnis auf unserer Website angenehm zu gestalten und steig zu verbessen!";
  const message_en =
    "We use cookies to make your experience on our website pleasant and to improve it!";

  const [open, setOpen] = useState(false);
  const { setConsent, consent } = useConsent();
  const hasCookie = consent["consent"] === "allow";

  const accept = () => {
    setConsent();
    setOpen(false);
  };
  const decline = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (hasCookie) return;
    setOpen(true);
  }, [hasCookie]);

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-live="polite"
          className="fixed bottom-0 left-0 right-0 border-t-2 border-black p-2 bg-white z-90 md:p-4 "
        >
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            <div className="flex items-center justify-between text-xs-fluid ">
              <p className=" text-xs-fluid">
                {locale === "en" ? message_en : message}
              </p>
            </div>

            <div className={"flex justify-between items-center  gap-8 "}>
              <button onClick={decline}>Decline</button>
              <Button onClick={accept}>Accept</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBar;
