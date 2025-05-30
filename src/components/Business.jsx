import styles, { layout } from "../styles";

const Business = () => {
  return (
    <section id="features" className={`${layout.section} flex-col md:flex-row`}>
      {/* Kiri: Penjelasan */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="font-poppins font-semibold text-white text-[28px] sm:text-[36px] leading-[40px] sm:leading-[50px] mb-4">
          Membuang Sampah Sembarangan
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[28px] max-w-[550px]">
          Tindakan ini merupakan bentuk penyimpangan terhadap norma kebersihan dan tanggung jawab sosial.
          Membuang sampah sembarangan mencerminkan kurangnya kesadaran lingkungan dan dapat menimbulkan
          dampak buruk, seperti pencemaran lingkungan, banjir, dan penyebaran penyakit.
        </p>
      </div>

      {/* Kanan: Gambar */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <img
          src="/photos/image-sampah.jpeg"
          alt="Membuang Sampah Sembarangan"
          className="w-full h-full max-w-[500px] max-h-[400px] object-cover rounded-[20px]"
        />
      </div>
    </section>
  );
};

export default Business;
