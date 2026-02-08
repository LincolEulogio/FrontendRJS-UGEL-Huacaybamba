import React, { useState, useEffect } from "react";

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

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  // Auto-play
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-slate-900 group">
      {/* Slides */}
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover brightness-75"
            />
            {/* Optional Overlay Content could go here */}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous slide"
      >
        <span className="material-symbols-rounded text-2xl md:text-3xl">
          chevron_left
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next slide"
      >
        <span className="material-symbols-rounded text-2xl md:text-3xl">
          chevron_right
        </span>
      </button>

      {/* Indicators/Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-8 h-2.5 bg-primary"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Gradient Overlay (Optional, for better text contrast if header is transparent) */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-900/60 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSlider;
