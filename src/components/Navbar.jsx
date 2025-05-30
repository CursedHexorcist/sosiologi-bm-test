import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Shape transparan kiri */}
      <div
        className="fixed top-0 left-0 h-full w-[150px] pointer-events-none"
        style={{ background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(10px)" }}
      />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 transition-all duration-300 ${
          scrolled ? "bg-white/10 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <img
          src="/photos/image-sma.png"
          alt="Logo SMA"
          style={{ height: "40px", width: "auto", objectFit: "contain" }}
          draggable={false}
        />

        {/* Mobile menu toggle */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            aria-label={toggle ? "Close menu" : "Open menu"}
            className="text-white text-2xl focus:outline-none"
          >
            {toggle ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {toggle && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-black bg-opacity-90 rounded-lg shadow-lg p-4">
            {/* Kalau mau isi menu bisa ditambah sini, sekarang kosong */}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
