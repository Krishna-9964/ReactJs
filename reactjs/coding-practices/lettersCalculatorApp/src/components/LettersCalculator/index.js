// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letterCount: 0}

  countLetters = event => {
    this.setState({letterCount: event.target.value.length})
  }

  render() {
    const {letterCount} = this.state
    return (
      <div className="container">
        <div className="main">
          <p className="heading">Calculate the letters you enter</p>
          <p>Enter the phrase</p>
          <input
            type="text"
            placeholder="Enter the phrase"
            onChange={this.countLetters}
          />
          <p className="count">No. of letters: {letterCount}</p>
        </div>
        <div className="background">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
