import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getMessages } from "../API/chatMessages"
import "../Components/Chat.css"
import ChatList from "../Components/ChatList"
import ChatCreateNewChatMessage from "../Components/ChatCreateNewChatMessage"

function Chat() {
  const [chatMessages, setChatMessages] = useState([])
  const [chatLoading, setChatLoading] = useState(true)

  const loadMessages = async () => {
    setChatLoading(true)
    const messagesFromBackend = await getMessages()
    setChatMessages(messagesFromBackend)
    setChatLoading(false)
  }

  useEffect(() => {
    loadMessages()
  }, [])

  let chatMessageList = (
    <div>
      <h4>Loading...</h4>
    </div>
  )
  if (chatLoading === false && chatMessages.length > 0) {
    chatMessageList = <ChatList chatMessages={chatMessages} />
  } else if (chatLoading === false && chatMessages.length === 0) {
    chatMessageList = (
      <div>
        <h4>No chat messages found</h4>
      </div>
    )
  }

  return (
    <div className="chatContainer font-family">
      <div className="container ">
        <div className="row">
          <div className="col-sm-12 my-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item nav-link">
                  <Link className="linkDecoration" to="/">
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active nav-link active-breadcrumb font-family"
                  aria-current="page"
                >
                  Chat
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3 className="color pb-4">Chat</h3>
          </div>
        </div>
        <div className="border rounded border-light ">
          <div id="chat-username-date" className="border-bottom">
            {chatMessageList}
          </div>
          <ChatCreateNewChatMessage loadMessages={loadMessages} />
        </div>
      </div>
    </div>
  )
}

export default Chat
