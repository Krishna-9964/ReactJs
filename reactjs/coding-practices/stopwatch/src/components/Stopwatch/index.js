// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, seconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  startTime = () => {
    this.timerId = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  stopTime = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  resetTime = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false, seconds: 0})
  }

  updateTime = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  updateSeconds = () => {
    const {seconds} = this.state
    const ss = seconds % 60

    if (ss < 10) return `0${ss}`

    return ss
  }

  updateMinutes = () => {
    const {seconds} = this.state
    const mm = Math.floor(seconds / 60) % 60
    if (mm < 10) return `0${mm}`

    return mm
  }

  render() {
    const time = `${this.updateMinutes()}:${this.updateSeconds()}`
    const {isTimerRunning} = this.state
    return (
      <div className="app-container">
        <h1>Stopwatch</h1>
        <div className="timer-container">
          <div className="icon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1>{time}</h1>
          <div className="buttons">
            <button
              type="button"
              className="btn btn-success"
              onClick={this.startTime}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.stopTime}
              disabled={!isTimerRunning}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.resetTime}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
