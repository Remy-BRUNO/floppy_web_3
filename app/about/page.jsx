import styles from "./About.module.css"
import Image from "next/image"

export default function About() {
  return (
    <>
      <main className={styles.container}>
        <h2 className={styles.title}>À propos</h2>
        <p className={styles.text}>
          Je suis Rémy, développeur freelance basé sur Chambéry (73).
          <br />
          Passionné de web et grand fan d’univers geek (mangas, BD, jeux
          vidéo...), je conçois des sites Next.js performants avec une touche
          créative.
        </p>
        <p className={styles.text}>
          🚀 <strong>Mon objectif </strong>: propulser votre présence en ligne
          avec des sites rapides, élégants et simples à gérer.
        </p>
        <div className={styles.profilPicture}>
          <Image src={"/images/profil.webp"} alt="Photo de Rémy" fill />
        </div>
      </main>
    </>
  )
}
