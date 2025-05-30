import styles, { layout } from "../styles";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} flex flex-col-reverse sm:${layout.section}`}>
    {/* Gambar */}
    <div className={`${layout.sectionImg} sm:order-none order-2`}>
      <img
        src="/photos/image-lalulintas.png"
        alt="Pelanggaran Lalu Lintas"
        className="w-full h-full object-cover rounded-[20px]"
      />
    </div>

    {/* Teks */}
    <div className={`${layout.sectionInfo} pl-0 sm:pl-10 sm:order-none order-1`}>
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
