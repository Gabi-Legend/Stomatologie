"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "@/app/components/NavBar/NavBar.module.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" className={styles.linkLogo}>
          <h1>Stomatologie</h1>
        </Link>
      </div>

      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li>
          <Link href="/">Acasă</Link>
        </li>
        <li>
          <Link href="/servicii">Servicii</Link>
        </li>
        <li>
          <Link href="/echipa">Echipă</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/programare" className={styles.btn}>
            Programează-te
          </Link>
        </li>
      </ul>
    </nav>
  );
}
