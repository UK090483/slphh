interface Window {
  grecaptcha?: {
    render: (item: string | Element) => void;
    getResponse: () => any[];
  };
  onloadCapCallback?: () => void;
}
