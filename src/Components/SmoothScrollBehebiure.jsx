// SmoothScrollProvider.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,

            //  Faster scroll (lower = faster)
            duration: 0.7,

            //  Smooth easing (feels premium)
            easing: (t) => 1 - Math.pow(1 - t, 4),

            //  Mouse wheel sensitivity
            wheelMultiplier: 1.7,

            //  Touch sensitivity (mobile)
            touchMultiplier: 2,
        });

        //  Animation frame loop
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // 🧹 Cleanup
        return () => {
            lenis.destroy();
        };
    }, []);

    return children;
}