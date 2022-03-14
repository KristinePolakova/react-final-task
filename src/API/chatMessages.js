import axios from "axios"

const baseUrl = "http://localhost:3000/tasks"

export async function getMessages() {
  const response = await axios.get(baseUrl)
  return response.data
}

export async function addNewChatMessage(username, message, createdAt) {
  const data = {
    title: username,
    message: message,
    createdAt: createdAt,
  }

  await axios.post(baseUrl, data)
}
