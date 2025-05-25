'use client'

import LoadingState from './LoadingState'
import ErrorState from './ErrorState'
import styles from '../styles/usersCard.module.css'

export default function UsersCard({ usuarios, carregando, erro, onReload }) {
  return (
    <div className={`${styles.cardDashboard} ${styles.cardUsuarios}`}>
      <div className={styles.cabecalhoCard}>
        <h3>Usuários do Sistema</h3>
        <button 
          onClick={onReload} 
          className={styles.botaoAtualizar}
          disabled={carregando}
        >
          {carregando ? 'Atualizando...' : 'Atualizar'}
        </button>
      </div>

      {carregando ? (
        <LoadingState />
      ) : erro ? (
        <ErrorState error={erro} onRetry={onReload} />
      ) : (
        <div className={styles.tabelaUsuarios}>
          {usuarios.length === 0 ? (
            <p>Nenhum usuário encontrado.</p>
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Cargo</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((usuario) => (
                    <tr key={usuario.id}>
                      <td>{usuario.displayName || 'Não informado'}</td>
                      <td>{usuario.userPrincipalName}</td>
                      <td>{usuario.jobTitle || 'Não Definido'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.totalUsuarios}>Total: {usuarios.length} usuários</p>
            </>
          )}
        </div>
      )}
    </div>
  )
}
