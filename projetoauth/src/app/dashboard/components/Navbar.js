'use client'

import styles from '../styles/navbar.module.css'

export default function Navbar({ onLogout }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Meu Painel</h1>
      </div>
      <div className={styles.areaBotoes}>
        <button onClick={onLogout} className={styles.botaoSair}>
          Sair
        </button>
      </div>
    </nav>
  )
}