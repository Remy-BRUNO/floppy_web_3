"use client"

import { useEffect, useState } from "react"
import styles from "../styles/DarkModeToggle.module.css"

export default function DarkModeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.body.dataset.theme = dark ? "dark" : "light"
  }, [dark])

  return (
    <button
      type="button"
      onClick={() => setDark(!dark)}
      className={styles.toggle}
      aria-label="Activer ou désactiver le mode sombre"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  )
}
