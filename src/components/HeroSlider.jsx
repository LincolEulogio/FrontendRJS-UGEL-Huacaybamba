import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSlider = () => {
  const slides = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDi2HrawoxpNYFOinTyn4-3JtrAOUFr4ZHlUDtCIrJcvx5HnKpbWtyIbuonjlZ1DjTUQpQvP1U55rp-OKMptleicjNIimELsvkkd97PAxRSEHScgAdWAMqL5Cu5L5oxJTHuEndVHyAMWStwBl5VdpN3P6a94pheJKG3ygL1yzTo7U-fcsMQHfSbgkMSx5hxf2jioPcT51QzWbbbo0iEstG8fr0dXdwJOnfORJGKf0sJih4ZL4E4TQ4qxiMwiW70Ja57YjhucacFN4I",
      alt: "Estudiantes en clase",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuByHzw-nSry-1TJvlt-579SfhrH-UBvWlZ9owvLroFGzaVP08hClNQ4a2EIxXmmAOxJGKXTsGMcahWmOHBTGHoFkGLoe5sc6JG3DvOY7OecidkBqUZ7ySQfAo1j9EDh6bonbcVqlupvbN48bvv7QeLRqSTmHdT5lfnVA7QEK61DlqLyLLFOD4SGp_ZEg73ImxGaniDq0wcMVCfrTG6xL8yBaba5y5zSKyQs2ijDkTMFSRPRveWhdMjp6cW5awJgQdgv9R1L3We_Rfs",
      alt: "Docentes capacitándose",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA3yf-LMC5m6Uq79cjf1FQMAivxIeNQ7uY_qtwOA9IHcZcsPR1woENYjF9mA79NB9dYssyf-apBnrpI3c4rZZedtmAWr7hEHpDCJFeBKnhH36T09IfPsd_Fx99S6wZL6kOFEwL8UaaMA1n4JjURDvBtlqXLJSTDavVvUGk2zEa_fC8NKVdYyO-JQtpevDVVj7vzmdxOejECvOuia19ds8a7Cn2Pshtukt7lQ2ezZqGtlLegdPE_fxwuvpxF_ZeUI5OMGgevBfds2Gk",
      alt: "Infraestructura educativa",
    },
  ];

  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  // GSAP Animation for slide Change
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".slide-bg",
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [current]);

  // Auto-play
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="w-full px-4 pt-4 pb-8 md:px-8" ref={containerRef}>
      <div className="relative w-full max-w-6xl mx-auto aspect-video md:aspect-[21/9] overflow-hidden bg-white dark:bg-slate-900 group rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800">
        {/* Slides */}
        <div className="w-full h-full relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                current === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-900">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="max-w-full max-h-full object-contain slide-bg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/40 hover:bg-white/60 text-slate-800 p-4 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20 shadow-xl border border-white/20"
          aria-label="Previous slide"
        >
          <span className="material-symbols-rounded text-3xl">
            chevron_left
          </span>
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/40 hover:bg-white/60 text-slate-800 p-4 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20 shadow-xl border border-white/20"
          aria-label="Next slide"
        >
          <span className="material-symbols-rounded text-3xl">
            chevron_right
          </span>
        </button>

        {/* Indicators/Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/20 dark:bg-black/20 px-6 py-3 rounded-full backdrop-blur-xl z-20 border border-white/20 shadow-2xl">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                current === index
                  ? "w-8 h-2.5 bg-primary"
                  : "w-2.5 h-2.5 bg-slate-400/50 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
