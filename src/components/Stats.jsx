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

  useEffect(() => {
    if (!textRef.current) return;

    // Step 1: Reset posisi teks ke kanan (tanpa animasi)
    setIsAnimating(false);
    setTranslateX(window.innerWidth);

    // Step 2: Jalankan animasi scroll setelah reset posisi (pakai timeout kecil)
    const animTimeout = setTimeout(() => {
      setIsAnimating(true);
      setTranslateX(-textRef.current.offsetWidth);
    }, 50);

    // Step 3: Setelah animasi selesai, ganti teks berikutnya
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
          transition: isAnimating ? `transform ${scrollDuration}ms linear` : "none",
        }}
      >
        {texts[currentIndex]}
      </div>
    </section>
  );
};

export default Stats;
