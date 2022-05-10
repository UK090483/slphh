import * as React from "react";
import { useState } from "react";
import { ICarouselContextState, useCarousel } from "./CarouselContext";

interface ICarouselItemWrapProps {
  delay?: number;
  children: (props: {
    activeItem: number;
    animateIn: boolean;
    animateOut: boolean;
  }) => React.ReactElement;
}

function CarouselItemWrap(props: ICarouselItemWrapProps) {
  const { children, delay = 500 } = props;

  const { activeItem: _active } = useCarousel();

  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  React.useEffect(() => {
    setAnimateOut(true);
    const timeOut = setTimeout(() => {
      setActiveItem(_active);
      setAnimateOut(false);
    }, delay);
    return () => {
      clearTimeout(timeOut);
    };
  }, [_active, delay]);

  React.useEffect(() => {
    if (animateOut) return;
    const timeOut = setTimeout(() => {
      setAnimateIn(true);
    }, delay / 2);
    return () => {
      clearTimeout(timeOut);
    };
  }, [animateOut, delay]);

  return (
    <ul className="grid grid-cols-1 grid-rows-1">
      {children && children({ activeItem, animateIn, animateOut })}
    </ul>
  );
}

export default CarouselItemWrap;
