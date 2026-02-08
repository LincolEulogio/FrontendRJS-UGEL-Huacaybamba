import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const requestRef = useRef();

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse coordinates
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    },
    [isVisible],
  );

  const handleMouseOver = useCallback((e) => {
    const target = e.target.closest(
      "a, button, [role='button'], input, textarea, .interactive",
    );
    setIsHovering(!!target);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", () => setIsVisible(false));
    document.addEventListener("mouseenter", () => setIsVisible(true));

    const animate = () => {
      // Smooth lerp for ring follower
      const lerp = (a, b, n) => (1 - n) * a + n * b;

      ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.15);

      if (dotRef.current) {
        gsap.set(dotRef.current, { x: mouse.current.x, y: mouse.current.y });
      }
      if (ringRef.current) {
        gsap.set(ringRef.current, {
          x: ringPos.current.x,
          y: ringPos.current.y,
        });
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(requestRef.current);
    };
  }, [onMouseMove, handleMouseOver]);

  return (
    <div
      className={`hidden lg:block fixed inset-0 pointer-events-none z-[10000] ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
    >
      {/* Main SVG Cursor */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[10001]"
      >
        <svg
          width={isHovering ? "80" : "40"}
          height={isHovering ? "80" : "40"}
          viewBox="0 0 100 100"
          className="transition-all duration-500 ease-out"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary opacity-50"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="283"
            strokeDashoffset={isHovering ? "0" : "200"}
            className="text-primary transition-all duration-700"
          />
        </svg>
      </div>

      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 z-[10002] shadow-[0_0_10px_rgba(30,64,175,0.8)] transition-transform duration-300 ${isHovering ? "scale-[0.5]" : "scale-100"}`}
      />
    </div>
  );
};

export default CustomCursor;
