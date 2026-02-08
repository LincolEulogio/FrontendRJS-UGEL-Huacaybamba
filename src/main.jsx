import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import "./index.css";

// Animation imports
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";

const App = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    window.lenis = lenis;

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
