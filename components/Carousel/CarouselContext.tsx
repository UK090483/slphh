import React, { useContext, useState } from "react";

interface ICarouselContextState {
  items: any[];
  initialActiveItem?: number;
  next: () => void;
  prev: () => void;
  reset: () => void;
  activeItem: number;
  itemCount: number;
}

const defaultState: ICarouselContextState = {
  items: [],
  next: () => null,
  prev: () => null,
  reset: () => null,
  activeItem: 0,
  itemCount: 0,
};

const CarouselContext = React.createContext(defaultState);

interface CarouselContextProviderProps
  extends Pick<ICarouselContextState, "items" | "initialActiveItem"> {
  children?: React.ReactNode;
}

export const CarouselContextProvider = (
  props: CarouselContextProviderProps
) => {
  const { children, initialActiveItem, items, ...rest } = props;
  const [activeItem, setActiveItem] = useState(initialActiveItem || 0);
  const itemCount = items.length;
  const next = () => setActiveItem((x) => (x + 1) % itemCount);
  const prev = () => setActiveItem((x) => (x === 0 ? itemCount - 1 : x - 1));
  const reset = () => setActiveItem(initialActiveItem || 0);

  return (
    <CarouselContext.Provider
      value={{
        items,
        itemCount,
        activeItem,
        initialActiveItem,
        next,
        prev,
        reset,
        ...rest,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => {
  return useContext(CarouselContext);
};
