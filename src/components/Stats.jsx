import { useState, useEffect, useRef } from "react";
import styles from "../styles";

const texts = [
  "SMA NEGERI 10 PONTIANAK",
  "SEKOLAHNYA PARA JUARA",
  "MADE BY GABRIELL T XA",
];

const Stats = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef = useRef(null);

  const scrollDuration = 8000;

  // Fungsi bantu dapatkan posisi awal berdasarkan ukuran layar
  const getStartPosition = () => {
    if (window.innerWidth >= 768) {
      // PC: mulai dari kanan dengan ekstra offset supaya teks lebih lebar space-nya
      return window.innerWidth + 100;
    }
    // Mobile: mulai dari tepat kanan layar
    return window.innerWidth;
  };

  useEffect(() => {
    if (!textRef.current) return;

    setIsAnimating(false);
    setTranslateX(getStartPosition());

    const animTimeout = setTimeout(() => {
      setIsAnimating(true);
      setTranslateX(-textRef.current.offsetWidth);
    }, 50);

    const nextTextTimeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, scrollDuration + 50);

    return () => {
      clearTimeout(animTimeout);
      clearTimeout(nextTextTimeout);
    };
  }, [currentIndex]);

  return (
    <section
      className={`${styles.flexCenter} overflow-hidden w-full py-4`}
      style={{ height: window.innerWidth >= 768 ? 120 : 80 }}
    >
      <div
        ref={textRef}
        style={{
          whiteSpace: "nowrap",
          fontSize: window.innerWidth >= 768 ? "4rem" : "3rem",
          fontWeight: "700",
          color: "white",
          position: "relative",
          transform: `translateX(${translateX}px)`,
          transition: isAnimating ? `transform ${scrollDuration}ms linear` : "none",
          userSelect: "none",
        }}
      >
        {texts[currentIndex]}
      </div>
    </section>
  );
};

export default Stats;
