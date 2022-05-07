class ParallaxItem {
  offset: number;
  element: HTMLElement;
  constructor(element: HTMLElement) {
    this.element = element;
    this.offset = this.getOffset();
  }
  update(scrollY: number) {
    const delta = scrollY - this.offset + 500;
    if (delta < 0) return;

    this.element.style.willChange = `transform`;
    this.element.style.transform = `translate3d(0,${delta * 0.4}px,0)`;
  }

  getOffset() {
    const rect = this.element.getBoundingClientRect();
    return rect.top + window.scrollY;
  }
}

export default ParallaxItem;
