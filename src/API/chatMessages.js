import axios from "axios"

const baseUrl = "http://localhost:3000/tasks"

// export function getMessages() {
// return [
//   {
//     username: "Pēteris",
//     time: "25.11.2021 21:18",
//     message:
//       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerumdolore accusantium ipsa animi mollitia quae unde dicta sit illomagnam, in iusto quas harum delectus nisi? Doloribus tempore quossaepe.",
//   },
// ]

// }

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
