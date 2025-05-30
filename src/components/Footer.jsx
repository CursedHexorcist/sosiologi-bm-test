import styles from "../styles";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    {/* Logo Section */}
    <div className="flex flex-col items-center mb-6">
      <img
        src="/photos/image-sma.png" // path relatif ke public folder
        alt="Logo"
        className="w-[200px] h-auto object-contain"
      />
    </div>

    {/* Copyright Section */}
    <div className="w-full flex justify-center pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[16px] leading-[24px] text-white">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <span className="text-secondary">Gabriell T</span>. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
