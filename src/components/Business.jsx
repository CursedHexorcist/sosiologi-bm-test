import styles, { layout } from "../styles";

// Feature Card khusus 1 penyimpangan sosial
const FeatureCard = () => (
  <div className="flex flex-row p-6 rounded-[20px] feature-card bg-[#1e1e1e]">
    {/* Gambar */}
    <div className="w-[96px] h-[96px] rounded-[12px] overflow-hidden bg-dimBlue flex items-center justify-center">
      <img
        src="/photos/image-sampah.jpeg"
        alt="Membuang Sampah Sembarangan"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Informasi */}
    <div className="flex-1 flex flex-col ml-5">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-2">
        Membuang Sampah Sembarangan
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        Tindakan ini merupakan bentuk penyimpangan terhadap norma kebersihan dan
        tanggung jawab sosial. Membuang sampah sembarangan mencerminkan kurangnya
        kesadaran lingkungan dan dapat menimbulkan dampak buruk, seperti pencemaran
        lingkungan, banjir, dan penyebaran penyakit.
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      {/* Section Info */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Penyimpangan Sosial <br className="sm:block hidden" />
          di Tempat Umum
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Berikut adalah salah satu contoh penyimpangan sosial yang sering kita temui
          di tempat umum:
        </p>
      </div>

      {/* Card Penyimpangan */}
      <div className={`${layout.sectionImg} flex-col`}>
        <FeatureCard />
      </div>
    </section>
  );
};

export default Business;
