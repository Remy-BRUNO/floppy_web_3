import styles from "./Services.module.css"
import ServicesCards from "@/components/ServicesCards"

export default function Services() {
  return (
    <>
      <main className={styles.container}>
        <h2 className={styles.title}>Mes Services</h2>

        <ServicesCards />
        <p className={styles.text}>
          Les services de développement web Next.js sont entièrement
          personnalisables pour répondre à vos besoins uniques.
          <br /> Pour un devis adapté à votre projet, contactez-moi !
        </p>
      </main>
    </>
  )
}
