import { useState, useEffect, useRef } from "react";
import styles from "../styles";

const texts = [
  "SMA NEGERI 10 PONTIANAK - JUARA SEJATI",
  "SMA NEGERI 10 PONTIANAK - JUARA SEJATI",
  "SMA NEGERI 10 PONTIANAK - JUARA SEJATI",
];

const Stats = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateStage, setAnimateStage] = useState("fadeIn"); // fadeIn, scroll, fadeOut
  const textRef = useRef(null);

  // Durasi animasi (ms)
  const fadeInDuration = 300;   // muncul cepat
  const scrollDuration = 8000;  // jalan lambat
  const fadeOutDuration = 300;  // hilang cepat

  useEffect(() => {
    let timeout1, timeout2, timeout3;

    if (animateStage === "fadeIn") {
      // setelah fadeIn, mulai scroll
      timeout1 = setTimeout(() => {
        setAnimateStage("scroll");
      }, fadeInDuration);
    }

    if (animateStage === "scroll") {
      // setelah scroll selesai, fadeOut
      timeout2 = setTimeout(() => {
        setAnimateStage("fadeOut");
      }, scrollDuration);
    }

    if (animateStage === "fadeOut") {
      // setelah fadeOut, ganti teks dan fadeIn lagi
      timeout3 = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setAnimateStage("fadeIn");
      }, fadeOutDuration);
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [animateStage]);

  // Style untuk animasi
  const stylesText = {
    opacity: animateStage === "fadeIn" ? 1 : animateStage === "fadeOut" ? 0 : 1,
    transition: `opacity ${animateStage === "fadeIn" || animateStage === "fadeOut" ? fadeInDuration : 0}ms ease-in-out`,
    whiteSpace: "nowrap",
    fontSize: "3rem", // besar
    fontWeight: "700",
    color: "white",
    position: "relative",
    left: animateStage === "scroll" ? "-100%" : "0",
    transitionProperty: animateStage === "scroll" ? "left" : "opacity",
    transitionDuration: animateStage === "scroll" ? `${scrollDuration}ms` : `${fadeInDuration}ms`,
    transitionTimingFunction: animateStage === "scroll" ? "linear" : "ease-in-out",
  };

  return (
    <section className={`${styles.flexCenter} overflow-hidden w-full py-4`} style={{ height: 80 }}>
      <div style={stylesText} ref={textRef}>
        {texts[currentIndex]}
      </div>
    </section>
  );
};

export default Stats;
