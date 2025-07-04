import styles from "../styles";
import { discount } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* Left Side */}
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

      {/* Heading */}
      <div className="w-full">
        <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Penyimpangan <br className="sm:block hidden" />
          <span className="text-gradient">Sosial</span>
        </h1>
      </div>

      {/* 4 Label Baru di Bawah Judul */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[470px]">
        {/* Nama Siswa */}
        <div className="flex items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]">
          <img src={discount} alt="Icon" className="w-[32px] h-[32px]" />
          <div className="ml-2 text-sm">
            <p className={`${styles.paragraph} text-gray-300`}>Nama Siswa:</p>
            <p className="text-white font-semibold">Gabriell T</p>
          </div>
        </div>

        {/* Mata Pelajaran */}
        <div className="flex items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]">
          <img src={discount} alt="Icon" className="w-[32px] h-[32px]" />
          <div className="ml-2 text-sm">
            <p className={`${styles.paragraph} text-gray-300`}>Mata Pelajaran:</p>
            <p className="text-white font-semibold">Sosiologi</p>
          </div>
        </div>

        {/* Nama Guru */}
        <div className="flex items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]">
          <img src={discount} alt="Icon" className="w-[32px] h-[32px]" />
          <div className="ml-2 text-sm">
            <p className={`${styles.paragraph} text-gray-300`}>Nama Guru:</p>
            <p className="text-white font-semibold">Ibu Yulida</p>
          </div>
        </div>

        {/* Tahun Ajaran */}
        <div className="flex items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]">
          <img src={discount} alt="Icon" className="w-[32px] h-[32px]" />
          <div className="ml-2 text-sm">
            <p className={`${styles.paragraph} text-gray-300`}>Tahun Ajaran:</p>
            <p className="text-white font-semibold">2024/2025</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Memberikan 5 contoh penyimpangan sosial yang umum terjadi di sekitar, beserta penjelasannya
      </p>
    </div>

    {/* Right Side */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src="/photos/react-ic.png"
        alt="React Icon"
        className="w-[70%] h-[70%] relative z-[5] object-contain"
      />

      {/* Gradient Layers */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Hero;
