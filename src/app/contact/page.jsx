import NavBar from "../components/NavBar/NavBar";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <>
      <NavBar />
      <section className={styles.contact}>
        <h1 className={styles.title}>Contactează-ne</h1>
        <p className={styles.subtitle}>
          Suntem aici să răspundem întrebărilor tale și să te ajutăm să îți
          menții zâmbetul sănătos.
        </p>

        <div className={styles.grid}>
          {/* Formular */}
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
              />

              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
              />

              <label htmlFor="message" className={styles.label}>
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className={styles.textarea}
              ></textarea>

              <button type="submit" className={styles.btn}>
                Trimite mesaj
              </button>
            </form>
          </div>

          {/* Informații + Hartă */}
          <div className={styles.info}>
            <h2 className={styles.infoTitle}>Informații de contact</h2>
            <p>
              <strong>Adresă:</strong> Str. Exemplu 123, București
            </p>
            <p>
              <strong>Telefon:</strong>{" "}
              <a href="tel:+40712345678">+40 712 345 678</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@stomatologie.ro">
                contact@stomatologie.ro
              </a>
            </p>

            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.344448042657!2d26.10253831552409!3d44.42676797910254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff473e2c9f6b%3A0xb1a8b5f5daddb9e0!2sBucure%C8%99ti!5e0!3m2!1sen!2sro!4v1614855067685!5m2!1sen!2sro"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
