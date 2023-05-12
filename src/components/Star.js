import { FaStar } from 'react-icons/fa';
function Star(props) {
  return (
    <div className={props.className ? 'yellow' : 'none'} >
      <FaStar />
    </div>
  )
}

export default Star