import NavBar from "../components/NavBar/NavBar";
import styles from "./page.module.css";

export default function Servicii() {
  const serviciiList = [
    {
      titlu: "Consultație",
      descriere:
        "Evaluare completă a sănătății dentare și plan personalizat de tratament.",
      imagine: "/images/consultatie.jpg",
    },
    {
      titlu: "Detartraj & Albire",
      descriere:
        "Curățare profesională și albire pentru un zâmbet mai luminos.",
      imagine: "/images/albire.jpg",
    },
    {
      titlu: "Implant dentar",
      descriere: "Înlocuirea dinților lipsă cu implanturi de calitate premium.",
      imagine: "/images/implant.jpg",
    },
    {
      titlu: "Ortodonție",
      descriere: "Aparat dentar pentru corectarea alinierii dinților.",
      imagine: "/images/ortodontie.jpg",
    },
  ];

  return (
    <>
      <NavBar />
      <section className={styles.servicii}>
        <h1 className={styles.title}>Serviciile Noastre</h1>
        <p className={styles.subtitle}>
          Oferim tratamente stomatologice moderne, sigure și personalizate
          pentru nevoile tale.
        </p>

        <div className={styles.grid}>
          {serviciiList.map((serviciu, index) => (
            <div key={index} className={styles.card}>
              <img
                src={serviciu.imagine}
                alt={serviciu.titlu}
                className={styles.image}
              />
              <h2>{serviciu.titlu}</h2>
              <p>{serviciu.descriere}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
