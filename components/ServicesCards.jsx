"use client"
import { useEffect, useRef } from "react"
import styles from "../styles/ServicesCards.module.css"
import Image from "next/image"

export default function ServicesCards() {
  const serviceSectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.3 }
    )

    const cards = serviceSectionRef.current?.querySelectorAll(
      `.${styles.serviceCard}`
    )
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={serviceSectionRef} className={styles.services}>
      <div className={styles.serviceCard}>
        <Image
          src="/images/icons/website.svg"
          alt="Site vitrine rapide et moderne"
          width={64}
          height={64}
        />
        <h3>Site vitrine rapide et moderne</h3>
        <p>Propulsé par Next.js pour une performance optimale.</p>
      </div>

      <div className={styles.serviceCard}>
        <Image
          src="/images/icons/seo.svg"
          alt="Optimisation SEO"
          width={64}
          height={64}
        />
        <h3>Optimisation SEO</h3>
        <p>Pour que Google tombe amoureux de votre site.</p>
      </div>

      <div className={styles.serviceCard}>
        <Image
          src="/images/icons/responsive.svg"
          alt="Responsive Design"
          width={64}
          height={64}
        />
        <h3>Responsive Design</h3>
        <p>Joli sur mobile, tablette et grand écran.</p>
      </div>

      <div className={styles.serviceCard}>
        <Image
          src="/images/icons/support.svg"
          alt="Accompagnement personnalisé"
          width={64}
          height={64}
        />
        <h3>Accompagnement personnalisé</h3>
        <p>Je vous guide de l’idée à la mise en ligne.</p>
      </div>
    </section>
  )
}
