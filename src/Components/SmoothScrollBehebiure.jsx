// SmoothScrollProvider.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({ children }) {
    useEffect(() => {
        // create Lenis instance
        const lenis = new Lenis({
            smooth: true,
            easing: (t) => 1 - Math.pow(1 - t, 2),
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // cleanup on unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return children;
}
