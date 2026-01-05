import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../services/api"
import { handleApiError } from "../../utils/handlerApiError"

export default function EditUser() {  //Quando o componente aparecer na tela

  const { id } = useParams() //Vou pegar da URL o valor chamado id

  const [user, setUser] = useState(null) //Ainda não tenho o usuário então, começo com null
  const [loading, setLoading] = useState(true) //useState guarda dados do usuário

  useEffect(() => { //Busca o usuário quando a tela abre
    async function loadUser() {
      try {
        const response = await api.get(`/usuarios/${id}`)
        setUser(response.data)//Response significa a resposta do back end para a minha requisição HTTP
      } catch (error) {
        console.error("Erro ao buscar usuário:", error)
      } finally {//Quando a tentativa de buscar o usuário terminar dando certo ou errado, pare de mostrar o loading
        setLoading(false)   // Finaliza o estado de loading após a requisição
      }
    }

    loadUser()
  }, [id]) //Se o id mudar, busca de novo

  if (loading) {//Se a requisição ainda está em andamento mostre "Carregando usuário", ainda estou eperando a reposta do back end
    return <p>Carregando usuário...</p>
  }
  if (!user) {
    return <p>Usuário não encontrado</p>
  }

  async function updateUser() {
    try {
      await api.put(`/usuarios/${id}`, {
        name: user.name,
        email: user.email,
        age: user.age ? Number(user.age) : null
      })
      alert("Usuário atualizado com sucesso!")
      navigate("/list-user")
    } catch (error) {
      handleApiError(error)
    }

  }

  return (
    <div>
      <h1>Editar Usuário</h1>

      <input value={user.name} onChange={(e) => //User.name(valor vindo back end)
        setUser({ ...user, name: e.target.value }) //copia o usuário inteiro e altera só um
      }
        placeholder="nome"
      />

      <input value={user.email} onChange={(e) =>
        setUser({ ...user, email: e.target.value })

      }
        placeholder="Email"
      />

      <input value={user.age} onChange={(e) => //onChange é um “ouvinte de evento, Ele diz ao React:Quando o valor desse input mudar, execute essa função.”
        setUser({ ...user, age: e.target.value })
      }
        placeholder="Idade"
      />
      <button onClick={updateUser}>
        Salvar alterações
      </button>

    </div>

  )

}