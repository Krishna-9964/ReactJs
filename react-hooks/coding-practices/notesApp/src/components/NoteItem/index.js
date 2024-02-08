// Write your code here
import './index.css'

const NoteItem = props => {
  const {item} = props

  return (
    <li className="item">
      <h5>{item.title}</h5>
      <p>{item.text}</p>
    </li>
  )
}

export default NoteItem
