import { useState, useEffect, useRef } from "react";
import styles from "../styles";

const texts = [
  "SMA NEGERI 10 PTK",
  "SEKOLAHNYA PARA JUARA",
  "MADE BY GABRIELL T XA",
];

const Stats = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef = useRef(null);

  // Durasi scroll (ms)
  const scrollDuration = 10000; // 10 detik scroll perlahan

  // Hitung posisi awal dan akhir berdasarkan ukuran teks dan viewport
  const getPositions = () => {
    const vw = window.innerWidth;
    const textWidth = textRef.current ? textRef.current.offsetWidth : 0;

    // posisi mulai di luar viewport kanan
    const startPos = vw;

    // posisi akhir di luar viewport kiri = -lebar teks
    const endPos = -textWidth;

    return { startPos, endPos };
  };

  // Setup animasi tiap kali teks berganti
  useEffect(() => {
    if (!textRef.current) return;

    const { startPos, endPos } = getPositions();

    // reset posisi ke kanan tanpa transisi dulu
    setIsAnimating(false);
    setTranslateX(startPos);

    // sedikit delay biar browser apply posisi reset dulu
    const delay = setTimeout(() => {
      // mulai animasi scroll ke kiri
      setIsAnimating(true);
      setTranslateX(endPos);
    }, 50);

    return () => clearTimeout(delay);
  }, [currentIndex]);

  // Handler saat animasi scroll selesai (transisi selesai)
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const onTransitionEnd = () => {
      // setelah animasi selesai, ganti ke teks berikutnya
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    };

    el.addEventListener("transitionend", onTransitionEnd);

    return () => {
      el.removeEventListener("transitionend", onTransitionEnd);
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
          willChange: "transform",
        }}
      >
        {texts[currentIndex]}
      </div>
    </section>
  );
};

export default Stats;
