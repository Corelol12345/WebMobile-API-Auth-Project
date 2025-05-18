'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import './dashboard.css'

export default function PaginaDashboard() {
  const [usuarios, setUsuarios] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      router.push('/login')
      return
    }

    async function carregarUsuarios() {
      try {
        setCarregando(true)
        setErro('')
        
        const resposta = await fetch('/api/usuarios')
        
        if (!resposta.ok) {
          const erroData = await resposta.json()
          throw new Error(erroData.erro || 'Erro ao carregar usuários')
        }

        const dados = await resposta.json()
        setUsuarios(dados)
      } catch (err) {
        setErro(err.message || 'Ocorreu um erro ao buscar os usuários')
        console.error('Erro:', err)
      } finally {
        setCarregando(false)
      }
    }

    carregarUsuarios()
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
          <h2>Bem-vindo ao Painel Administrativo</h2>
          <p>Gerencie os usuários do sistema</p>
        </section>

        <section className="area-cards">
          <div className="card-dashboard">
            <h3>Integrantes do Projeto</h3>
            <ul className="lista-integrantes">
              <li>Marco Aurélio de Oliveira Guimarães</li>
              <li>R.A: 10426798</li>
              <li>Eduardo Cardozo Pirolo</li>
              <li>R.A: 10427809</li>
            </ul>
          </div>

          <div className="card-dashboard card-usuarios">
            <div className="cabecalho-card">
              <h3>Usuários do Sistema</h3>
              <button 
                onClick={() => window.location.reload()} 
                className="botao-atualizar"
              >
                Atualizar
              </button>
            </div>

            {carregando ? (
              <div className="estado-carregamento">
                <p>Carregando usuários...</p>
                <div className="loader"></div>
              </div>
            ) : erro ? (
              <div className="mensagem-erro">
                <p>{erro}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="botao-tentar-novamente"
                >
                  Tentar novamente
                </button>
              </div>
            ) : (
              <div className="tabela-usuarios">
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
                <p className="total-usuarios">Total: {usuarios.length} usuários</p>
              </div>
            )}
          </div>

          <div className="card-dashboard">
            <h3>Sobre o Projeto</h3>
            <p>
              Sistema de gerenciamento integrado com Microsoft Entra ID 
              utilizando Next.js e Microsoft Graph API.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}