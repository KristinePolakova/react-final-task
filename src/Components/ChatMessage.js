import moment from "moment"


function ChatMessage(props) {
  const { message} = props

  return (
    <div className="border-bottom">
      <div className="col-md-12 d-flex justify-content-start">
        <div className="py-2">
          <h5>{message.title}</h5>
        </div>
        <div className="p-2">
          <span>{moment(message.createdAt).format("DD.MM.YYYY. HH:mm")}</span>
        </div>
      </div>
      <div className="col-md-12">
        <p>{message.message}</p>
      </div>
    </div>
  )
}

export default ChatMessage
