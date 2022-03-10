import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getMessages } from "../API/chatMessages"
import "../Components/Chat.css"
import ChatList from "../Components/ChatList"
import ChatCreateNewChatMessage from "../Components/ChatCreateNewChatMessage"

function Chat() {
  // const [chatMessages, setChatMessages] = useState(getMessages())
  // const [newChatMessage, setNewChatMessage] = useState([])

  // const [username, setUsername] = useState("")
  // const [message, setMessage] = useState("")

  // let today = new Date()
  // let date =
  //   ("0" + today.getDate()).slice(-2) +
  //   "." +
  //   "0" +
  //   (today.getMonth() + 1) +
  //   "." +
  //   today.getFullYear()
  // let min = String(today.getMinutes()).padStart(2, "0")
  // let hours = String(today.getHours()).padStart(2, "0")
  // let time = hours + ":" + min
  // let dateAndTime = date + " " + time

  // const addNewMessage = () => {
  //   const addNewMessage = {
  //     username: username,
  //     time: dateAndTime,
  //     message: message,
  //   }
  //   setChatMessages([...chatMessages, addNewMessage])
  //   setMessage("")
  // }

  // const submitData = (e) => {
  //   e.preventDefault()
  // }

  // const messageList = chatMessages.map((message, index) => {
  //   return (
  //     <div className="row border-bottom" key={index} >
  //       <div className="col-md-12 d-flex justify-content-start">
  //         <div className="p-2">
  //           <h5>{message.username}</h5>
  //         </div>
  //         <div className="p-2">
  //           <span>{message.time}</span>
  //         </div>
  //       </div>
  //       <div className="col-md-12">
  //         <p>{message.message}</p>
  //       </div>
  //     </div>
  //   )
  // })

  // return (
  //   <div className="chatContainer font-family">
  //     <div className="container ">
  //       <div className="row">
  //         <div className="col-sm-12 my-3">
  //           <nav aria-label="breadcrumb">
  //             <ol className="breadcrumb">
  //               <li className="breadcrumb-item nav-link">
  //                 <Link className="linkDecoration" to="/">
  //                   Home
  //                 </Link>
  //               </li>
  //               <li
  //                 className="breadcrumb-item active nav-link active-breadcrumb font-family"
  //                 aria-current="page"
  //               >
  //                 Chat
  //               </li>
  //             </ol>
  //           </nav>
  //         </div>
  //       </div>
  //       <div className="row" >
  //         <div className="col-md-12">
  //           <h3 className="color pb-4">Chat</h3>
  //         </div>
  //       </div>

  //       <div className="border rounded border-light " >
  //         <div id="chat-username-date" className="border-bottom">
  //         {messageList}
  //         </div>

  //         <form onSubmit={submitData}>
  //           <div className="row p-3">
  //             <div className="col-md-4 py-2">
  //               <label className="form-label">Username:</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="username"
  //                 name="username"
  //                 value={username}
  //                 onChange={(event) => setUsername(event.target.value)}
  //               />
  //             </div>
  //           </div>
  //           <div className="row px-3">
  //             <div className="col-md-9 py-2">
  //               <div className="form-outline mb-4">
  //                 <label className="form-label">Message:</label>
  //                 <textarea
  //                   className="form-control"
  //                   id="message"
  //                   rows="3"
  //                   name="message"
  //                   value={message}
  //                   onChange={(event) => setMessage(event.target.value)}
  //                 ></textarea>
  //               </div>
  //             </div>
  //             <div className="col-md-1 d-flex align-items-end pb-2">
  //               <button
  //                 type="submit"
  //                 className="btn btn-light btn-block mb-4 chat-button"
  //                 onClick={addNewMessage}
  //               >
  //                 Send
  //               </button>
  //             </div>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </div>

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
        <div className="border rounded border-light " >
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
