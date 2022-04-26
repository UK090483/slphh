import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Script from "next/script";
const isDevelopment = process.env.NODE_ENV === "development";
const DefaultCookieName = "consent";

type Consents = { [k: string]: string | undefined };
interface IAnalyticsContextState {
  setConsent: () => void;
  consent: Consents;
}
const defaultState: IAnalyticsContextState = {
  setConsent: () => console.log("No AnalyticsContext found"),
  consent: {},
};
const AnalyticsContext = React.createContext(defaultState);

interface AnalyticsContextProviderProps {
  id: string;
}
export const AnalyticsContextProvider: React.FC<
  AnalyticsContextProviderProps
> = (props) => {
  const { id, children, ...rest } = props;
  const router = useRouter();

  const [consent, _setConsent] = useState<Consents>({
    [DefaultCookieName]: Cookies.get(DefaultCookieName),
  });

  const hasCookie = consent[DefaultCookieName];

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (isDevelopment) return;
      pageView(url);
    };
    router.events.on("beforeHistoryChange", handleRouteChange);
    return () => {
      router.events.off("beforeHistoryChange", handleRouteChange);
    };
  }, [router.events]);

  const setConsent = () => {
    Cookies.set(DefaultCookieName, "allow");
    _setConsent((i) => ({ ...i, [DefaultCookieName]: "allow" }));
  };

  return (
    <AnalyticsContext.Provider value={{ consent, setConsent, ...rest }}>
      {hasCookie && !isDevelopment && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
          </Script>
        </>
      )}

      {children}
    </AnalyticsContext.Provider>
  );
};

const pageView = (url: string) => {
  if (!window || !window.gtag) return;
  window.gtag("set", { page_path: url, page_title: url });
};

export const useAnalyticsContext = () => {
  return useContext(AnalyticsContext);
};

export const useConsent = () => {
  const { setConsent, consent } = useContext(AnalyticsContext);
  return { setConsent, consent };
};
