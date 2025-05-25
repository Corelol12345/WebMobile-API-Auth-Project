'use client'

import { useEffect, useState, useCallback } from 'react'

export function useUsers() {
  const [usuarios, setUsuarios] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState(null)

  const fetchUsuarios = useCallback(async () => {
    setCarregando(true)
    setErro(null)

    try {
      const resposta = await fetch('/api/usuarios')
      if (!resposta.ok) throw new Error('Erro ao buscar usuários')
      const dados = await resposta.json()
      setUsuarios(dados)
    } catch (err) {
      setErro(err.message || 'Erro desconhecido')
    } finally {
      setCarregando(false)
    }
  }, [])

  useEffect(() => {
    fetchUsuarios()
  }, [fetchUsuarios])

  return {
    usuarios,
    carregando,
    erro,
    reloadUsers: fetchUsuarios,
  }
}
