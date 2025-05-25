'use client'

import styles from '../styles/projectMembersCard.module.css'

export default function ProjectMembersCard() {
  return (
    <div className={styles.cardDashboard}>
      <h3>Integrantes do Projeto</h3>
      <ul className={styles.listaIntegrantes}>
        <li>Marco Aurélio de Oliveira Guimarães</li>
        <li>R.A: 10426798</li>
        <li>Eduardo Cardozo Pirolo</li>
        <li>R.A: 10427809</li>
      </ul>
    </div>
  )
}