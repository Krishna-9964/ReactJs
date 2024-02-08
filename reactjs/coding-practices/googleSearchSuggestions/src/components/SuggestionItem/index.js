// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item, setInputValue} = props

  const arrowClicked = () => {
    setInputValue(item.suggestion)
  }

  return (
    <li>
      <p>{item.suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={arrowClicked}
      />
    </li>
  )
}

export default SuggestionItem
