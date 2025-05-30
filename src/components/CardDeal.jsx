import styles, { layout } from "../styles";

const CardDeal = () => (
  <section className={layout.section}>
    {/* Info Kiri */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Merokok di <br className="sm:block hidden" /> Tempat Umum
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Merokok di tempat umum, terutama di area yang dilarang, melanggar norma
        kesehatan dan aturan hukum yang melindungi hak orang lain untuk menghirup
        udara bersih. Tindakan ini juga menunjukkan kurangnya kepedulian terhadap
        kesehatan orang lain, terutama anak-anak dan lansia.
      </p>
    </div>

    {/* Gambar Kanan */}
    <div className={layout.sectionImg}>
      <img
        src="/photos/image-rokok.jpg"
        alt="Merokok"
        className="w-[100%] h-[100%] object-cover rounded-[20px]"
      />
    </div>
  </section>
);

export default CardDeal;
