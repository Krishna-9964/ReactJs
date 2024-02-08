// Write your code here
import {useState} from 'react'
import {Heading} from './styledComponents'
import NoteItem from '../NoteItem'
import './index.css'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [notes, setNotes] = useState([])
  const [id, setId] = useState(0)

  const addNote = () => {
    if (title !== '' && text !== '') {
      setNotes(prevState => [...prevState, {id, title, text}])
      setId(prevState => prevState + 1)
      setTitle('')
      setText('')
    }
  }

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeText = event => {
    setText(event.target.value)
  }
  return (
    <div className="container">
      <Heading>Notes</Heading>
      <form className="input-container">
        <input
          type="text"
          placeholder="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <textarea
          rows="4"
          cols="75"
          placeholder="Take a Note..."
          onChange={onChangeText}
          value={text}
        />
        <button type="submit" onClick={addNote}>
          Add
        </button>
      </form>

      {notes.length === 0 && (
        <div className="no-notes">
          <img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <h4>No Notes Yet</h4>
          <p>Notes you add will appear here</p>
        </div>
      )}

      <ul className="notes-list">
        {notes.map(eachItem => (
          <NoteItem item={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default Notes
