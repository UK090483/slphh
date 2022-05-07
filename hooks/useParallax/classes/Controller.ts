import ParallaxItem from "./Item";

class ParallaxController {
  _ticking: boolean;
  elements: ParallaxItem[];
  _supportsPassive: boolean;
  constructor() {
    this._ticking = false;
    this.elements = this._getElements();
    this._supportsPassive = testForPassiveScroll();
    this._bindAllMethods();
    this._addListeners();
  }

  static init(): ParallaxController {
    const hasWindow = typeof window !== "undefined";
    if (!hasWindow) {
      throw new Error(
        "Looks like ParallaxController.init() was called on the server. This method must be called on the client."
      );
    }
    return new ParallaxController();
  }

  _bindAllMethods() {
    [
      "_addListeners",
      "_removeListeners",
      "_handleScroll",
      "_getElements",
      "_updateAllElements",
      "destroy",
    ].forEach((method: string) => {
      // @ts-expect-error
      this[method] = this[method].bind(this);
    });
  }

  _addListeners() {
    window.addEventListener(
      "scroll",
      this._handleScroll,
      this._supportsPassive ? { passive: true } : false
    );
  }

  _removeListeners() {
    window.removeEventListener("scroll", this._handleScroll, false);
  }

  _handleScroll() {
    // Only called if the last animation request has been
    // completed and there are parallax elements to update
    if (!this._ticking && this.elements.length > 0) {
      this._ticking = true;
      // @ts-ignore
      window.requestAnimationFrame(this._updateAllElements);
    }
  }

  _getElements() {
    return Array.from(document.querySelectorAll<HTMLElement>(".parallax")).map(
      (e) => new ParallaxItem(e)
    );
  }

  _updateAllElements() {
    const scrollY = window.scrollY;
    this.elements.forEach((e) => {
      e.update(scrollY);
    });
    this._ticking = false;
  }

  destroy() {
    this._removeListeners();
  }
}

function testForPassiveScroll() {
  let supportsPassiveOption = false;
  try {
    const opts = Object.defineProperty({}, "passive", {
      get() {
        supportsPassiveOption = true;
        return true;
      },
    });
    // @ts-expect-error
    window.addEventListener("test", null, opts);
    // @ts-expect-error
    window.removeEventListener("test", null, opts);
  } catch (e) {}
  return supportsPassiveOption;
}

export default ParallaxController;
