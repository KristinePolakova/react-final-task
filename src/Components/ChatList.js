import ChatMessage from "./ChatMessage"

function ChatList(props) {
    const {chatMessages} = props
    const chatList = chatMessages.map((message, index) => {
        return <ChatMessage message={message} key={index}/>
    })
  return (
    <div className="row border-bottom">
        {chatList}
    </div>
  )
}

export default ChatList