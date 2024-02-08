// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  onIncrement = () => {
    const {count} = this.state
    const randomNumber = Math.floor(Math.random() * 101)
    const newCount = count + randomNumber
    const isEvenNumber = newCount % 2 === 0
    this.setState({count: newCount, isEven: isEvenNumber})
  }

  render() {
    const {count, isEven} = this.state
    return (
      <div className="container">
        <h1>Count is {count}</h1>
        <p>Count is {isEven ? 'Even' : 'Odd'}</p>
        <button onClick={this.onIncrement}>Increment</button>
        <p>*Increased by random number between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
