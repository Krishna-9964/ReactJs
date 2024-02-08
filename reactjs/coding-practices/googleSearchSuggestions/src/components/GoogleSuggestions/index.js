// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  setInputValue = inputText => {
    this.setState({searchInput: inputText})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filteredData = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <img
          className="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="googlelogo"
        />
        <div className="search-container">
          <div className="search-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.changeInput}
              value={searchInput}
            />
          </div>

          <ul className="search-results">
            {filteredData.map(eachItem => (
              <SuggestionItem
                item={eachItem}
                key={eachItem.id}
                setInputValue={this.setInputValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
