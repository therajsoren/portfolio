"use client";
import { useEffect, useRef, ReactNode, createContext, useContext } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

interface SmoothScrollContextType {
  scroll: LocomotiveScroll | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scroll: null,
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
  children: ReactNode;
}

const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Small delay to ensure DOM is ready
    const initScroll = setTimeout(() => {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: containerRef.current!,
        smooth: true,
        multiplier: 0.8,
        lerp: 0.08,
        getDirection: true,
        getSpeed: true,
        smartphone: {
          smooth: true,
          multiplier: 1,
        },
        tablet: {
          smooth: true,
          multiplier: 1,
        },
      });

      // Handle anchor links for smooth scrolling
      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a[href^="#"]');
        if (anchor) {
          e.preventDefault();
          const href = anchor.getAttribute("href");
          if (href && href !== "#") {
            const targetElement = document.querySelector(href);
            if (targetElement && locomotiveScrollRef.current) {
              locomotiveScrollRef.current.scrollTo(
                targetElement as HTMLElement,
                {
                  offset: -100,
                  duration: 1000,
                }
              );
            }
          }
        }
      };

      document.addEventListener("click", handleAnchorClick);

      // Update scroll on content changes
      const observer = new MutationObserver(() => {
        locomotiveScrollRef.current?.update();
      });

      if (containerRef.current) {
        observer.observe(containerRef.current, {
          childList: true,
          subtree: true,
        });
      }

      return () => {
        document.removeEventListener("click", handleAnchorClick);
        observer.disconnect();
      };
    }, 100);

    // Update locomotive scroll on resize
    const handleResize = () => {
      locomotiveScrollRef.current?.update();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(initScroll);
      window.removeEventListener("resize", handleResize);
      locomotiveScrollRef.current?.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider
      value={{ scroll: locomotiveScrollRef.current }}
    >
      <div ref={containerRef} data-scroll-container className="min-h-screen">
        {children}
      </div>
    </SmoothScrollContext.Provider>
  );
};

export default SmoothScrollProvider;
