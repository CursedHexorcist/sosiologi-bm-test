import styles from "../styles";
import { discount, robot } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* Left Side */}
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      {/* Nama dan Kelas */}
      <div className="flex flex-row space-x-6 mb-4">
        {/* Nama */}
        <div className="flex flex-col py-[6px] px-4 bg-discount-gradient rounded-[10px] min-w-[120px]">
          <p className={`${styles.paragraph} text-sm mb-1`}>Nama:</p>
          <p className="text-white font-semibold text-lg">Gabriell</p>
        </div>

        {/* Kelas */}
        <div className="flex flex-col py-[6px] px-4 bg-discount-gradient rounded-[10px] min-w-[120px]">
          <p className={`${styles.paragraph} text-sm mb-1`}>KELAS:</p>
          <p className="text-white font-semibold text-lg">XA</p>
        </div>
      </div>

      {/* Mata Pelajaran dan Guru */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
        {/* Mata Pelajaran Sosiologi */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] flex-1">
          <img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 text-sm`}>
            Mata Pelajaran <span className="text-white font-semibold">Sosiologi</span>
          </p>
        </div>

        {/* Guru */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] flex-1">
          <img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 text-sm`}>
            Guru: <span className="text-white font-semibold">Ibu Yulida</span>
          </p>
        </div>
      </div>

      {/* Heading */}
      <div className="w-full">
        <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Penyimpangan <br className="sm:block hidden" />
          <span className="text-gradient">Sosial</span>
        </h1>
      </div>

      {/* Description */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Memberikan 5 contoh penyimpangan sosial yang umum terjadi di sekitar, beserta penjelasannya
      </p>
    </div>

    {/* Right Side */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
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
