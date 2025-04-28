'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import './dashboard.css'

export default function PaginaDashboard() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      router.push('/login')
    }
  }, [router])

  const sair = () => {
    localStorage.removeItem('authToken')
    router.push('/login')
  }

  return (
    <div className="pagina-dashboard">
      <nav className="navbar">
        <div className="logo">
          <h1>Meu Painel</h1>
        </div>
        <div className="area-botoes">
          <button onClick={sair} className="botao-sair">
            Sair
          </button>
        </div>
      </nav>

      <main className="conteudo-principal">
        <section className="boas-vindas">
          <h2>Bem-vindo ao Painel Principal</h2>
          <p>Você está logado com sucesso no sistema!</p>
        </section>

        <section className="area-cards">
          <div className="card-dashboard">
            <h3>Integrantes do Projeto</h3>
            <ul className="lista-integrantes">
              <li>Marco Aurélio de Oliveira Guimarães</li>
              <li>R.A:10426798</li>
              <li>Eduardo Cardozo Pirolo</li>
              <li>R.A:10427809</li>
            </ul>
          </div>

          <div className="card-dashboard">
            <h3>Objetivo do Projeto</h3>
            <p>Desenvolver um sistema simples de autenticação de usuários utilizando Next.js e chamadas de API.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
