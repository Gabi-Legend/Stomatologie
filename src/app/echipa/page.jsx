import NavBar from "../components/NavBar/NavBar";
import styles from "./page.module.css";

export default function Echipa() {
  const echipaList = [
    {
      nume: "Dr. Andrei Popescu",
      rol: "Medic stomatolog",
      descriere:
        "Specializat în implantologie și chirurgie dentară, cu peste 10 ani experiență.",
      imagine: "/images/medic1.jpg",
    },
    {
      nume: "Dr. Maria Ionescu",
      rol: "Ortodont",
      descriere:
        "Expert în tratamente ortodontice moderne pentru copii și adulți.",
      imagine: "/images/medic2.jpg",
    },
    {
      nume: "Dr. Alexandru Radu",
      rol: "Medic endodont",
      descriere:
        "Specializat în tratamente de canal și salvarea dinților naturali.",
      imagine: "/images/medic3.jpg",
    },
    {
      nume: "Irina Georgescu",
      rol: "Asistentă medicală",
      descriere: "Îngrijire atentă și suport pe toată durata tratamentului.",
      imagine: "/images/medic4.jpg",
    },
  ];

  return (
    <>
      <NavBar />
      <section className={styles.echipa}>
        <h1 className={styles.title}>Echipa Noastră</h1>
        <p className={styles.subtitle}>
          Profesioniști dedicați sănătății și zâmbetului tău.
        </p>

        <div className={styles.grid}>
          {echipaList.map((membru, index) => (
            <div key={index} className={styles.card}>
              <img
                src={membru.imagine}
                alt={membru.nume}
                className={styles.image}
              />
              <h2 className={styles.name}>{membru.nume}</h2>
              <h3 className={styles.role}>{membru.rol}</h3>
              <p className={styles.description}>{membru.descriere}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
