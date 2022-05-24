import { CSSProperties } from "react";

type AnimationElement = {
  element: HTMLElement;
  initRect: DOMRect;
};

type StyleAttribute = CSSProperties;

export type AnimationItemOption = {
  selector: string;
  initialStyle?: StyleAttribute;
  showStyle?: StyleAttribute;
  hideStyle?: StyleAttribute;
  initialClass?: string;
  showClass?: string;
  hideClass?: string;
};

const ID_NAME = "aniId";

export default class Animator {
  styleItems: AnimationItemOption[] = [];
  items: AnimationItem[] = [];
  _observer;

  constructor(options: AnimationItemOption | AnimationItemOption[]) {
    this._bindAllMethods();
    this._observer = new IntersectionObserver(this._observerCallback, {});
    this.styleItems = options
      ? Array.isArray(options)
        ? [...options]
        : [options]
      : [];
    this.init();
  }

  init() {
    this.items = this._getElements();
    this.forAll((i) => {
      this._observer.observe(i.element);
    });
  }
  forAll(cb: (ele: AnimationItem) => void) {
    this.items.forEach((i) => {
      cb(i);
    });
  }

  _bindAllMethods() {
    ["_observerCallback", "updateElement", "_getElements", "destroy"].forEach(
      (method: string) => {
        // @ts-expect-error
        this[method] = this[method].bind(this);
      }
    );
  }
  _observerCallback(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach((i) => {
      this.updateElement(i);
    });
  }

  updateElement(i: IntersectionObserverEntry) {
    //@ts-ignore
    const Item = this.items[i.target.dataset[ID_NAME]];
    if (i.isIntersecting) {
      return Item.show();
    }
    return Item.hide();
  }

  _getElements() {
    let elements: AnimationItem[] = [];
    this.styleItems.forEach((styleItem) => {
      elements = [
        ...elements,
        ...Array.from(
          document.querySelectorAll<HTMLElement>(styleItem.selector)
        ).map((i, index) => {
          return new AnimationItem(i, styleItem, elements.length + index + "");
        }),
      ];
    });
    return elements;
  }

  restart() {}
  destroy() {
    this.forAll((i) => {
      this._observer.unobserve(i.element);
    });
  }
}

class AnimationItem {
  element: HTMLElement;
  showStyle;
  initialStyle;
  hideStyle;
  showClass;
  initialClass;
  hideClass;
  constructor(
    element: HTMLElement,
    {
      showStyle,
      initialStyle,
      hideStyle,
      showClass,
      initialClass,
      hideClass,
    }: AnimationItemOption,
    id: string
  ) {
    this.element = element;
    this.element.dataset[ID_NAME] = id;
    this.showStyle = showStyle;
    this.initialStyle = initialStyle;
    this.hideStyle = hideStyle;
    this.showClass = showClass;
    this.initialClass = initialClass;
    this.hideClass = hideClass;
    this.init();
  }

  init() {
    this.initialStyle && this.setStyles(this.initialStyle);
    this.initialClass && this.element.classList.add(this.initialClass);
  }

  show() {
    this.showStyle && this.setStyles(this.showStyle);
    this.showClass && this.element.classList.add(this.showClass);
    this.hideClass && this.element.classList.remove(this.hideClass);
  }
  hide() {
    this.hideStyle && this.setStyles(this.hideStyle);
    this.showClass && this.element.classList.remove(this.showClass);
    this.hideClass && this.element.classList.add(this.hideClass);
  }

  setStyles(styles: StyleAttribute) {
    Object.entries(styles).forEach(([key, val]) => {
      this.setStyle(key, val);
    });
  }

  setStyle(key: string, val: string) {
    this.element.style.setProperty(key, val);
  }
}
