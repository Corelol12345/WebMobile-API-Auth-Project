'use client'

import styles from '../styles/aboutCard.module.css'

export default function AboutCard() {
  return (
    <div className={styles.cardDashboard}>
      <h3>Sobre o Projeto</h3>
      <p>
        Sistema de gerenciamento integrado com Microsoft Entra ID 
        utilizando Next.js e Microsoft Graph API.
      </p>
    </div>
  )
}