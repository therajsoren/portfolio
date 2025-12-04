// animations.ts
export type AnimationVariant = "circle" | "circle-blur" | "polygon" | "gif";
export type AnimationStart =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";

interface Animation {
  name: string;
  css: string;
}

const getClipPathOrigin = (start: AnimationStart): string => {
  switch (start) {
    case "top-left":
      return "0% 0%";
    case "top-right":
      return "100% 0%";
    case "bottom-left":
      return "0% 100%";
    case "bottom-right":
      return "100% 100%";
    case "center":
      return "50% 50%";
    default:
      return "100% 0%";
  }
};

export const createAnimation = (
  variant: AnimationVariant,
  start: AnimationStart,
  url?: string
): Animation => {
  const origin = getClipPathOrigin(start);

  // Simple and clean circle animation - no blink
  return {
    name: `${variant}-${start}`,
    css: `
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation: none;
        mix-blend-mode: normal;
      }
      ::view-transition-old(root) {
        z-index: 1;
      }
      ::view-transition-new(root) {
        z-index: 9999;
        animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes reveal {
        from {
          clip-path: circle(0% at ${origin});
        }
        to {
          clip-path: circle(150% at ${origin});
        }
      }
    `,
  };
};
