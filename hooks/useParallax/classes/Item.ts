const ACTIVE_CLASS = "parallax-active";
class ParallaxItem {
  offset: number;
  element: HTMLElement;
  speed = 0.4;
  boundaryTop: number | null = null;

  constructor(element: HTMLElement) {
    this.element = element;
    this.offset = this.getOffset();
    this.getOptions(this.element);
  }

  getOptions(element: HTMLElement) {
    const dataset = element.dataset;
    if (dataset["parallaxSpeed"]) {
      this.speed = parseFloat(dataset["parallaxSpeed"]);
    }
  }
  update(scrollY: number) {
    const delta = scrollY - this.offset + 500;
    if (delta < 0) {
      this.setActiveState(false);
      return;
    }
    this.setActiveState(true);
    this.element.style.willChange = `transform`;
    this.element.style.transform = `translate3d(0,${delta * this.speed}px,0)`;
  }

  setActiveState(active: boolean) {
    const hasClass = this.element.classList.contains(ACTIVE_CLASS);

    if (active && !hasClass) {
      return this.element.classList.add(ACTIVE_CLASS);
    }
    if (!active && hasClass) {
      this.element.classList.remove(ACTIVE_CLASS);
    }
  }

  getOffset() {
    const rect = this.element.getBoundingClientRect();
    return rect.top + window.scrollY;
  }
}

export default ParallaxItem;
