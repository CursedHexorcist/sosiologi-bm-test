import styles from "../styles";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow relative overflow-hidden`}
  >
    {/* Gradient Shape */}
    <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#a0c4ff] via-[#89c2d9] to-[#4361ee] opacity-30 blur-2xl z-0 -top-20 -right-20 animate-pulse-slow" />

    {/* Content */}
    <div className="flex flex-1 flex-col items-center text-center z-10">
      <h2 className="font-poppins font-semibold text-white text-[28px] sm:text-[36px] leading-[40px] sm:leading-[50px]">
        Sekian, terima kasih.
      </h2>
    </div>
  </section>
);

export default CTA;
