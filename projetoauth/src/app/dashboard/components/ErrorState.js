'use client'

import styles from '../styles/errorState.module.css'

export default function ErrorState({ error, onRetry }) {
  return (
    <div className={styles.mensagemErro}>
      <p>{error}</p>
      <button 
        onClick={onRetry} 
        className={styles.botaoTentarNovamente}
      >
        Tentar novamente
      </button>
    </div>
  )
}