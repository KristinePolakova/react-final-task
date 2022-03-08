import { useState } from "react"
import getMessages from "../API/getMessages"

function Chat() {
  const [messages, setMessages] = useState(getMessages())
  const [newChatMessage, setNewChatMessage] = useState("")

  const addNewMessage = () => {
    const newMessage = {
      username: "Pēteris",
      time: "25.11.2021 21:18",
      message: newChatMessage,
    }
    setMessages([...messages, newMessage])
    setNewChatMessage('')
  }

  const messageList = messages.map((message, index) => {
    return (
      <div className="row border-bottom border-dark" key={index}>
        <div className="col-md-12 d-flex justify-content-start">
          <div className="p-2">
            <h5>{message.username}</h5>
          </div>
          <div className="p-2">
            <span>{message.time}</span>
          </div>
        </div>
        <div className="col-md-12">
          <p>{message.message}</p>
        </div>
      </div>
    )
  })

  return (
    <div className="container border border-dark my-5">
      {messageList}
      <div className="col-md-4">
        <label>Username:</label>
        <input type="text" className="form-control" id="username" />
      </div>
      <div className="row pb-3">
        <div className="col-md-9">
          <div className="form-outline mb-4">
            <label className="form-label">Message:</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              value={newChatMessage}
              onChange={(event) => setNewChatMessage(event.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="col-md-1 d-flex align-items-end">
          <button
            type="submit"
            className="btn btn-success btn-block mb-4"
            id="chat-button"
            onClick={addNewMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
