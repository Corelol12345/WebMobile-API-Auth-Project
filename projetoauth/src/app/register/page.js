'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import './registrar.css'

export default function PaginaCadastro() {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    email: '',
    senha: ''
  })
  const roteador = useRouter()

  const mudarCampo = (evento) => {
    const { name, value } = evento.target
    setDadosFormulario(anterior => ({
      ...anterior,
      [name]: value
    }))
  }

  const enviarFormulario = (evento) => {
    evento.preventDefault()

    // Salvar os dados cadastrados no localStorage
    localStorage.setItem('usuarioCadastrado', JSON.stringify(dadosFormulario))

    // Redirecionar para login
    roteador.push('/login')
  }

  return (
    <div className="pagina-cadastro">
      <div className="caixa-cadastro">
        <div className="cabecalho-cadastro">
          <h1>Criar Conta</h1>
          <p>
            Já possui uma conta? <Link href="/login" className="link-login">Entrar</Link>
          </p>
        </div>

        <form onSubmit={enviarFormulario} className="formulario-cadastro">
          <div className="campo-formulario">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              name="nome"
              type="text"
              value={dadosFormulario.nome}
              onChange={mudarCampo}
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          <div className="campo-formulario">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={dadosFormulario.email}
              onChange={mudarCampo}
              placeholder="Digite seu email"
              required
            />
          </div>

          <div className="campo-formulario">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              name="senha"
              type="password"
              value={dadosFormulario.senha}
              onChange={mudarCampo}
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button type="submit" className="botao-cadastrar">
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  )
}
