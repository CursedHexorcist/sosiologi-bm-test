import styles from "../styles";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} overflow-hidden w-full py-4`}>
      <div className="whitespace-nowrap animate-marquee text-white font-poppins font-semibold text-xl sm:text-3xl">
        SMA NEGERI 10 PONTIANAK - JUARA SEJATI &nbsp;&nbsp;&nbsp; {/* spasi agar jarak antar loop */}
        SMA NEGERI 10 PONTIANAK - JUARA SEJATI &nbsp;&nbsp;&nbsp;
        SMA NEGERI 10 PONTIANAK - JUARA SEJATI &nbsp;&nbsp;&nbsp;
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Stats;
