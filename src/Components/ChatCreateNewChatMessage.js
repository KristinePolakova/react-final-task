import { useState } from "react"
import { addNewChatMessage } from "../API/chatMessages"

function CreateNewChatMessage(props) {
  const { loadMessages } = props
  const [username, setUsername] = useState("")
  const [message, setMessage] = useState("")
  const [messageCreating, setMessageCreating] = useState(false)

  const addNewMessage = async () => {
    setMessageCreating(true)
    await addNewChatMessage(username, message)
    setMessageCreating(false)
    await loadMessages()
    setMessage("")
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <div className="row p-3">
        <div className="col-md-4 py-2">
          <label className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
      </div>
      <div className="row px-3">
        <div className="col-md-9 py-2">
          <div className="form-outline mb-4">
            <label className="form-label">Message:</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="col-md-1 d-flex align-items-end pb-2">
          <button
            type="submit"
            className="btn btn-light btn-block mb-4 chat-button"
            disabled={messageCreating}
            onClick={addNewMessage}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  )
}

export default CreateNewChatMessage
