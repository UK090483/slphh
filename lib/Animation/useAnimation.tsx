import { useEffect } from "react";
import Animator, { AnimationItemOption } from "./Animator";

const useAnimation = (options: AnimationItemOption | AnimationItemOption[]) => {
  useEffect(() => {
    const animator = new Animator(options);
    return () => {
      animator.destroy();
    };
  });
};

export default useAnimation;
