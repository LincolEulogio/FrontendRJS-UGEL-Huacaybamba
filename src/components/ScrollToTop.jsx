import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    if (window.lenis) {
      window.lenis.on("scroll", toggleVisibility);
    }

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (window.lenis) {
        window.lenis.off("scroll", toggleVisibility);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 z-[9999] p-4 rounded-2xl bg-primary text-white shadow-2xl transition-all duration-500 transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-20 opacity-0 scale-50"
      } hover:scale-110 active:scale-95 group flex items-center justify-center border border-white/20 backdrop-blur-md`}
      aria-label="Scroll to top"
    >
      <span className="material-symbols-rounded text-3xl group-hover:-translate-y-1 transition-transform">
        north
      </span>
      <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
    </button>
  );
};

export default ScrollToTop;
