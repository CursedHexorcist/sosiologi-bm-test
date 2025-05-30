import { useState, useEffect, useRef } from "react";
import styles from "../styles";

const texts = [
  "SMA NEGERI 10 PONTIANAK",
  "SEKOLAHNYA PARA JUARA",
  "MADE BY GABRIELL T  XA",
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

    // total jarak scroll
    const distance = startPos - endPos;

    return { startPos, endPos, distance };
  };

  useEffect(() => {
    if (!textRef.current) return;

    const { startPos, endPos } = getPositions();

    setIsAnimating(false);
    setTranslateX(startPos);

    // beri delay kecil sebelum mulai animasi supaya posisi translateX benar dulu
    const animTimeout = setTimeout(() => {
      setIsAnimating(true);
      setTranslateX(endPos);
    }, 50);

    // setelah animasi selesai, ganti teks berikutnya
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
