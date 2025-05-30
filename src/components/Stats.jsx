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
  const textRef = useRef(null);

  // Durasi scroll dalam ms
  const scrollDuration = 8000;

  useEffect(() => {
    if (!textRef.current) return;

    // Reset posisi ke kanan penuh (100% viewport width)
    setTranslateX(window.innerWidth);

    // Mulai animasi dengan delay sedikit untuk reset posisi
    const timeoutId = setTimeout(() => {
      setTranslateX(-textRef.current.offsetWidth);
    }, 50);

    // Setelah animasi selesai, ganti teks
    const changeTextTimeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, scrollDuration + 100); // +100 ms untuk buffer

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(changeTextTimeout);
    };
  }, [currentIndex]);

  return (
    <section
      className={`${styles.flexCenter} overflow-hidden w-full py-4`}
      style={{ height: 80 }}
    >
      <div
        ref={textRef}
        style={{
          whiteSpace: "nowrap",
          fontSize: "3rem",
          fontWeight: "700",
          color: "white",
          position: "relative",
          transform: `translateX(${translateX}px)`,
          transition: `transform ${scrollDuration}ms linear`,
        }}
      >
        {texts[currentIndex]}
      </div>
    </section>
  );
};

export default Stats;
