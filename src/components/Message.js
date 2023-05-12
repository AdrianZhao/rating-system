
function Message(props) {
  const messageArray =['Terrible', 'Normal', 'Good', 'Very Good', 'Excellent'] 
  return (
    <h1 className="message">{messageArray[props.number - 1]}</h1>
  )
}

export default Message