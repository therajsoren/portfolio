declare module "locomotive-scroll" {
  interface LocomotiveScrollOptions {
    el?: HTMLElement;
    smooth?: boolean;
    multiplier?: number;
    lerp?: number;
    class?: string;
    getDirection?: boolean;
    getSpeed?: boolean;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    scrollFromAnywhere?: boolean;
    reloadOnContextChange?: boolean;
    resetNativeScroll?: boolean;
    smartphone?: {
      smooth?: boolean;
      breakpoint?: number;
    };
    tablet?: {
      smooth?: boolean;
      breakpoint?: number;
    };
  }

  export default class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions);
    on(event: string, callback: (...args: unknown[]) => void): void;
    off(event: string, callback: (...args: unknown[]) => void): void;
    update(): void;
    destroy(): void;
    start(): void;
    stop(): void;
    scrollTo(
      target: string | HTMLElement | number,
      options?: {
        offset?: number;
        duration?: number;
        easing?: [number, number, number, number];
        disableLerp?: boolean;
        callback?: () => void;
      }
    ): void;
  }
}

declare module "locomotive-scroll/dist/locomotive-scroll.css";
