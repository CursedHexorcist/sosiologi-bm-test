import styles, { layout } from "../styles";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${layout.section}`}
  >
    {/* Gambar Kiri */}
    <div className={layout.sectionImg}>
      <img
        src="/photos/image-lalulintas.png"
        alt="Pelanggaran Lalu Lintas"
        className="w-[100%] h-[100%] object-cover rounded-[20px]"
      />
    </div>

    {/* Teks Kanan */}
    <div className={layout.sectionInfo}>
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
