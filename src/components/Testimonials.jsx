import styles from "../styles";

const Testimonials = () => (
  <section
    id="clients"
    className={`flex flex-col-reverse sm:flex-row ${styles.paddingY}`}
  >
    {/* Gambar */}
    <div className="flex-1 flex justify-center items-center sm:mr-10">
      <img
        src="/photos/image-lalulintas.png"
        alt="Pelanggaran Lalu Lintas"
        className="w-full h-full object-cover rounded-[20px]"
      />
    </div>

    {/* Teks */}
    <div className="flex-1 flex flex-col justify-center items-start sm:pl-10 px-4 sm:px-0">
      <h2 className={styles.heading2}>
        Pelanggaran <br className="sm:block hidden" /> Lalu Lintas
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Contohnya seperti menerobos lampu merah, tidak memakai helm, atau
        berkendara tanpa SIM. Tindakan ini melanggar norma hukum dan dapat
        membahayakan keselamatan diri sendiri maupun orang lain. Pelanggaran
        lalu lintas juga mencerminkan rendahnya disiplin dalam masyarakat.
      </p>
    </div>
  </section>
);

export default Testimonials;
