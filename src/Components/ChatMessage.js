function ChatMessage(props) {
  const { message} = props

  return (
    <div >
      <div className="col-md-12 d-flex justify-content-start">
        <div className="p-2">
          <h5>{message.title}</h5>
        </div>
        <div className="p-2">
          <span>{message.createdAt}</span>
        </div>
      </div>
      <div className="col-md-12">
        <p>{message.message}</p>
      </div>
    </div>
  )
}

export default ChatMessage
