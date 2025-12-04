"use client";
import { useEffect, useRef } from "react";
import type LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let scroll: LocomotiveScroll;

    const handleScrollTo = (e: Event) => {
      const customEvent = e as CustomEvent;
      const id = customEvent.detail;
      const target = document.getElementById(id);
      if (scroll && target) {
        scroll.scrollTo(target);
      }
    };

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      scroll = new LocomotiveScroll({
        el: containerRef.current!,
        smooth: true,
      });

      window.addEventListener("scrollToSection", handleScrollTo);
    })();

    return () => {
      window.removeEventListener("scrollToSection", handleScrollTo);
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={containerRef} className="min-h-screen">
      {children}
    </div>
  );
}
