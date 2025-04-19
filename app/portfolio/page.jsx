import Image from "next/image"
import styles from "./Portfolio.module.css"
import projet1Img from "/public/projet1.png"
import projet2Img from "/public/projet2.png"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Eternaliz",
      url: "https://projet-eternaliz.netlify.app/",
      image: projet1Img,
      text: "Un site vitrine moderne réalisé avec Next.js, optimisé pour la vitesse et le référencement.",
    },
    {
      id: 2,
      name: "L'Ephémère",
      url: "https://lephemere.netlify.app/",
      image: projet2Img,
      text: "Une plateforme responsive avec une interface intuitive et des animations fluides.",
    },
  ]
  return (
    <>
      <main className={styles.container}>
        <h2 className={styles.title}>Portfolio</h2>
        <p className={styles.text}>
          Voici une sélection de projets sur lesquels j'ai travaillé récemment :
        </p>
        <div className={styles.projectGrid}>
          {projects.map((project) => {
            const { id, image, name, text, url } = project
            return (
              <div key={id} className={styles.projectCard}>
                <Image
                  priority
                  src={image}
                  alt={`Aperçu du site ${name}`}
                  className={styles.projectImage}
                />
                <h3>
                  Projet {id} — {name}
                </h3>
                <p>{text}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Voir le site
                </a>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}
