"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { lenisConfig } from "@/lib/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis(lenisConfig);

    // Expose globally so GSAP ScrollTrigger can hook in
    (window as unknown as Record<string, unknown>)["__lenis"] = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as Record<string, unknown>)["__lenis"];
    };
  }, []);

  return <>{children}</>;
}
