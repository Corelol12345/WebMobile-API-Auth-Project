export async function GET() {
  const tenantId = 'c6047e7d-0b8a-46ce-ac79-7e30a8480bfe'
  const clientId = 'c7e7f682-c0ce-46d7-b7b3-753e9dd56f97'
  const clientSecret = '7dP8Q~~HfbdcdXExKTYus_X8w_WeyX.vXn2wPda_'
  const escopo = 'https://graph.microsoft.com/.default'

  const urlToken = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`

  try {
    // 1 - Obter token
    const respostaToken = await fetch(urlToken, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
        scope: escopo
      })
    })

    if (!respostaToken.ok) {
      const erro = await respostaToken.json()
      console.error('Erro ao obter token:', erro)
      return Response.json({ erro: 'Falha na autenticação' }, { status: 500 })
    }

    const { access_token } = await respostaToken.json()

    // 2 - Buscar usuários
    const respostaUsuarios = await fetch('https://graph.microsoft.com/v1.0/users', {
      headers: { Authorization: `Bearer ${access_token}` }
    })

    if (!respostaUsuarios.ok) {
      const erro = await respostaUsuarios.json()
      console.error('Erro ao buscar usuários:', erro)
      return Response.json({ erro: 'Falha ao buscar usuários' }, { status: 500 })
    }

    const { value } = await respostaUsuarios.json()
    return Response.json(value)

  } catch (erro) {
    console.error('Erro inesperado:', erro)
    return Response.json({ erro: 'Erro no servidor' }, { status: 500 })
  }
}