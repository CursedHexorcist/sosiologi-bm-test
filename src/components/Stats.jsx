import React, { useState, useEffect } from "react";
import styles from "../styles";

const texts = [
  "SMA NEGERI 10 PONTIANAK",
  "SEKOLAHNYA PARA JUARA",
  "MADE BY GABRIELL T XA"
];

const TypingEffect = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const typingSpeed = 100; // ms per character
  const deletingSpeed = 50;
  const pauseTime = 1500; // delay after full text typed

  useEffect(() => {
    let timer;

    if (!deleting && charIndex <= texts[textIndex].length) {
      timer = setTimeout(() => {
        setDisplayText(texts[textIndex].substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (deleting && charIndex >= 0) {
      timer = setTimeout(() => {
        setDisplayText(texts[textIndex].substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (!deleting && charIndex > texts[textIndex].length) {
      timer = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setCharIndex(0);
      setTextIndex((textIndex + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, deleting, textIndex]);

  return (
    <div className={`${styles.flexCenter} flex-col`}>
      <h1 className="font-poppins font-semibold text-[48px] sm:text-[64px] text-white text-center">
        {displayText}
        <span className="blinking-cursor">|</span>
      </h1>
    </div>
  );
};

export default TypingEffect;
