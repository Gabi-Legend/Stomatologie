import NavBar from "../components/NavBar/NavBar";
import styles from "./page.module.css";

export default function ProgrameazaTe() {
  return (
    <>
      <NavBar />
      <section className={styles.appointment}>
        <h1 className={styles.title}>Programează-te</h1>
        <p className={styles.subtitle}>
          Completează formularul de mai jos și te vom contacta pentru
          confirmarea programării.
        </p>

        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <label htmlFor="name" className={styles.label}>
              Nume complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              required
            />

            <label htmlFor="phone" className={styles.label}>
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={styles.input}
              required
            />

            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              required
            />

            <label htmlFor="service" className={styles.label}>
              Serviciu dorit
            </label>
            <select
              id="service"
              name="service"
              className={styles.select}
              required
            >
              <option value="">Alege un serviciu</option>
              <option value="consultatie">Consultație</option>
              <option value="albire">Detartraj & Albire</option>
              <option value="implant">Implant dentar</option>
              <option value="ortodontie">Ortodonție</option>
            </select>

            <label htmlFor="date" className={styles.label}>
              Data dorită
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className={styles.input}
              required
            />

            <label htmlFor="message" className={styles.label}>
              Mesaj opțional
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={styles.textarea}
            ></textarea>

            <button type="submit" className={styles.btn}>
              Trimite cererea
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
