'use client'

import styles from '../styles/welcomeSection.module.css'

export default function WelcomeSection() {
  return (
    <section className={styles.boasVindas}>
      <h2>Bem-vindo ao Painel Administrativo</h2>
      <p>Gerencie os usuários do sistema</p>
    </section>
  )
}