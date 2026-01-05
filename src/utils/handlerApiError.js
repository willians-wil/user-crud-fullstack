export function handleApiError(error) {
  if (error.response?.data?.error) {
    alert(error.response.data.error)
  } else {
    alert("Erro de conexão com o servidor")
  }
}
