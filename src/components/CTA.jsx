import styles from "../styles";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex flex-1 flex-col items-center text-center">
      {/* Heading */}
      <h2 className="font-poppins font-semibold text-white text-[28px] sm:text-[36px] leading-[40px] sm:leading-[50px]">
        Sekian, terima kasih.
      </h2>
    </div>
  </section>
);

export default CTA;
