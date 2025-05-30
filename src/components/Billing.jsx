import styles, { layout } from "../styles";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    {/* Left Side: Image */}
    <div className={layout.sectionImgReverse}>
      {/* Gambar Tawuran */}
      <img
        src="/photos/image-tawuran.webp"
        alt="Tawuran Remaja"
        className="w-[100%] h-[100%] relative z-[5] object-cover rounded-[20px]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    {/* Right Side: Text Info */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Tawuran <br className="sm:block hidden" /> Remaja
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Tawuran antarpelajar atau kelompok remaja merupakan bentuk kekerasan sosial yang
        menyimpang dari norma hukum dan norma kesopanan. Hal ini sering dipicu oleh hal
        sepele, seperti perbedaan sekolah atau geng, dan dapat merugikan banyak pihak,
        termasuk masyarakat sekitar.
      </p>
    </div>
  </section>
);

export default Billing;
