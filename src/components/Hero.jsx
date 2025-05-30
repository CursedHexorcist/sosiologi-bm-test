import styles from "../styles";
import { discount, robot } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* Left Side */}
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      {/* Discount Promo 1 */}
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">Gabriell</span> XA
        </p>
      </div>

      {/* Discount Promo 2 */}
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-4">
        <img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          Mata Pelajaran <span className="text-white">Sosiologi</span>
        </p>
      </div>

      {/* Heading */}
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Penyimpangan <br className="sm:block hidden" />
          <span className="text-gradient">Sosial</span>
        </h1>

        {/* Guru Shape */}
        <div className="hidden ss:flex items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] ml-4">
          <img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            Guru: <span className="text-white">Ibu Yulida</span>
          </p>
        </div>
      </div>

      {/* Description */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        5 contoh penyimpangan sosial yang umumnya terjadi di tempat umum :
      </p>
    </div>

    {/* Right Side */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      {/* Background */}
      <img
        src={robot}
        alt="Robot"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* Gradient Layers */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Hero;
