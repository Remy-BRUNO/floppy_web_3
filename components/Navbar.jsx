"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import logo from "/public/Logo_Floppy.png"

export default function Navbar() {
  const pathname = usePathname()
  const links = [
    {
      hrefLink: "/",
      ariaLabel: "Aller à la page d'accueil",
      text: "Accueil",
    },
    {
      hrefLink: "/about",
      ariaLabel: "Aller à la page À propos",
      text: "À propos",
    },
    {
      hrefLink: "/services",
      ariaLabel: "Aller à la page des services",
      text: "Services",
    },
    {
      hrefLink: "/portfolio",
      ariaLabel: "Aller à la page portfolio",
      text: "Portfolio",
    },
    {
      hrefLink: "/contact",
      ariaLabel: "Aller à la page contact",
      text: "Contact",
    },
    {
      hrefLink: "/chambery-developpeur-web",
      ariaLabel: "Aller à la page Chambéry",
      text: "Chambéry & Savoie",
    },
  ]

  return (
    <nav className={styles.sidebar}>
      <Image
        src={logo}
        alt="logo floppy web"
        className={styles.logo}
        priority
      />

      <h1 className={styles.title}>
        Floppy <span>Web</span>
      </h1>
      <ul className={styles.navLinks}>
        {links.map((href) => {
          const { ariaLabel, hrefLink, text } = href
          return (
            <li key={hrefLink}>
              <Link
                href={hrefLink}
                className={`${styles.link} ${
                  pathname === hrefLink ? styles.active : ""
                }`}
                aria-label={ariaLabel}
              >
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
