// SmoothScroll.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1, // Adjust speed (higher = smoother & slower)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out expo
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full h-full overflow-hidden bg-white text-gray-900">
      {children}
    </div>
  );
}
