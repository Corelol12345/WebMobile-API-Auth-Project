'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import './login.css'

export default function PaginaLogin() {
  const [dadosLogin, setDadosLogin] = useState({
    email: '',
    senha: ''
  })
  const [erro, setErro] = useState('')
  const roteador = useRouter()

  const mudarCampo = (evento) => {
    const { name, value } = evento.target
    setDadosLogin(anterior => ({
      ...anterior,
      [name]: value
    }))
  }

  const enviarFormulario = (evento) => {
    evento.preventDefault()
    setErro('')

    const usuarioCadastrado = JSON.parse(localStorage.getItem('usuarioCadastrado'))

    if (usuarioCadastrado) {
      if (
        dadosLogin.email === usuarioCadastrado.email &&
        dadosLogin.senha === usuarioCadastrado.senha
      ) {
        // Usuário autenticado com sucesso
        localStorage.setItem('authToken', 'token-simulado')
        roteador.push('/dashboard')
      } else {
        setErro('Email ou senha incorretos')
      }
    } else {
      setErro('Nenhum usuário cadastrado encontrado')
    }
  }

  return (
    <div className="pagina-login">
      <div className="caixa-login">
        <div className="cabecalho-login">
          <h1>Entrar</h1>
          <p>
            Ainda não tem conta? <Link href="/register" className="link-register">Criar Conta</Link>
          </p>
        </div>

        {erro && (
          <div className="mensagem-erro">
            {erro}
          </div>
        )}

        <form onSubmit={enviarFormulario} className="formulario-login">
          <div className="campo-formulario">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={dadosLogin.email}
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
              value={dadosLogin.senha}
              onChange={mudarCampo}
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button type="submit" className="botao-entrar">
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}
