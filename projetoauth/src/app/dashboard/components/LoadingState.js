'use client'

import styles from '../styles/loadingState.module.css'

export default function LoadingState() {
  return (
    <div className={styles.estadoCarregamento}>
      <p>Carregando usuários...</p>
      <div className={styles.loader}></div>
    </div>
  )
}