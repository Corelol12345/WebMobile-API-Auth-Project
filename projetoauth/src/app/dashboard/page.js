// src/app/dashboard/page.js
'use client'

import { useAuth } from './hooks/useAuth'
import { useUsers } from './hooks/useUsers'
import Navbar from './components/Navbar'
import WelcomeSection from './components/WelcomeSection'
import ProjectMembersCard from './components/ProjectMembersCard'
import UsersCard from './components/UsersCard'
import AboutCard from './components/AboutCard'
import styles from './styles/dashboard.module.css'

export default function PaginaDashboard() {
  const { logout } = useAuth()
  const { usuarios, carregando, erro, reloadUsers } = useUsers()

  return (
    <div className={styles.paginaDashboard}>
      <Navbar onLogout={logout} />
      
      <main className={styles.conteudoPrincipal}>
        <WelcomeSection />
        
        <section className={styles.areaCards}>
          <ProjectMembersCard />
          <UsersCard 
            usuarios={usuarios}
            carregando={carregando}
            erro={erro}
            onReload={reloadUsers}
          />
          <AboutCard />
        </section>
      </main>
    </div>
  )
}