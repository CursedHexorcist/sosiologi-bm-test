import styles, { layout } from "../styles";

const Clients = () => (
  <section className={`${layout.section} flex-col md:flex-row`}>
    {/* Kiri: Penjelasan */}
    <div className="flex-1 flex flex-col justify-center">
      <h2 className="font-poppins font-semibold text-white text-[28px] sm:text-[36px] leading-[40px] sm:leading-[50px] mb-4">
        Menggunakan Fasilitas Umum Secara Tidak Benar
      </h2>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[28px] max-w-[550px]">
        Contohnya seperti mencoret-coret tembok fasilitas umum, merusak bangku taman, atau menggunakan toilet umum secara jorok. Tindakan ini mencerminkan penyimpangan terhadap norma kesopanan dan tanggung jawab sosial, serta dapat mengurangi kenyamanan dan keindahan lingkungan umum.
      </p>
    </div>

    {/* Kanan: Gambar */}
    <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
      <img
        src="/photos/image-fasilitas.jpg"
        alt="Fasilitas Umum"
        className="w-full h-full max-w-[500px] max-h-[400px] object-cover rounded-[20px]"
      />
    </div>
  </section>
);

export default Clients;
