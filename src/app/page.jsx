import NavBar from "./components/NavBar/NavBar";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Zâmbetul tău, prioritatea noastră
          </h1>
          <p className={styles.heroSubtitle}>
            Clinică stomatologică modernă, cu servicii de top pentru tine și
            familia ta.
          </p>
          <Link href="/programare" className={styles.btnPrimary}>
            Programează-te acum
          </Link>
        </div>
      </section>

      {/* Despre noi */}
      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>Despre noi</h2>
        <p className={styles.sectionText}>
          Cu peste 15 ani de experiență, echipa noastră de medici stomatologi
          oferă tratamente sigure, moderne și personalizate fiecărui pacient.
          Misiunea noastră este să îți redăm încrederea în zâmbetul tău.
        </p>
      </section>

      {/* Servicii populare */}
      <section className={styles.services}>
        <h2 className={styles.sectionTitle}>Serviciile noastre</h2>
        <div className={styles.grid}>
          <div className={styles.card}>Consultație</div>
          <div className={styles.card}>Detartraj & Albire</div>
          <div className={styles.card}>Implant dentar</div>
        </div>
        <Link href="/servicii" className={styles.linkMore}>
          Vezi toate serviciile →
        </Link>
      </section>

      {/* Echipă */}
      <section className={styles.team}>
        <h2 className={styles.sectionTitle}>Echipa noastră</h2>
        <p className={styles.sectionText}>
          Profesioniști dedicați sănătății tale dentare.
        </p>
        <Link href="/echipa" className={styles.linkMore}>
          Cunoaște echipa →
        </Link>
      </section>

      {/* Contact rapid */}
      <section className={styles.quickContact}>
        <h2 className={styles.sectionTitle}>Contact rapid</h2>
        <p>
          <strong>Telefon:</strong> +40 712 345 678
        </p>
        <p>
          <strong>Email:</strong> contact@stomatologie.ro
        </p>
      </section>
    </>
  );
}
