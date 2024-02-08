// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {second: 0, minute: 25, isTimerRunning: false}

  updateSeconds = () => {
    const {minute, second} = this.state
    this.setState(prevState => ({
      second: prevState.second === 0 ? 59 : prevState.second - 1,
      minute:
        prevState.second === 0 && prevState.minute > 0
          ? prevState.minute - 1
          : prevState.minute,
    }))
    if (minute === 0 && second === 0) {
      clearInterval(this.timerId)
      this.setState({isTimerRunning: false, second: 0})
    }
  }

  reduceMinute = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning === false) {
      this.setState(prevState => ({
        minute: prevState.minute > 0 ? prevState.minute - 1 : prevState.minute,
      }))
    }
  }

  increaseMinute = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning === false) {
      this.setState(prevState => ({
        minute: prevState.minute + 1,
      }))
    }
  }

  startTimer = () => {
    this.timerId = setInterval(this.updateSeconds, 1000)
    this.setState({isTimerRunning: true})
  }

  pauseTimer = () => {
    console.log(this.timerId)
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false, minute: 25, second: 0})
  }

  getTimer = () => {
    const {minute, second} = this.state
    const min = minute < 10 ? `0${minute}` : minute
    const sec = second < 10 ? `0${second}` : second
    return `${min}:${sec}`
  }

  render() {
    const {minute, isTimerRunning} = this.state
    return (
      <div className="container">
        <h1>Digital Timer</h1>
        <div className="main-container">
          <div className="timer">
            <h1>{this.getTimer()}</h1>
            <p>{isTimerRunning ? 'Running' : 'Paused'}</p>
          </div>
          <div className="controls">
            <div className="controls-1">
              <div className="start-pause">
                <img
                  src={
                    isTimerRunning
                      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                  }
                  alt={isTimerRunning ? 'pause icon' : 'play icon'}
                  onClick={isTimerRunning ? this.pauseTimer : this.startTimer}
                />
                <button
                  onClick={isTimerRunning ? this.pauseTimer : this.startTimer}
                >
                  {isTimerRunning ? 'Pause' : 'Start'}
                </button>
              </div>
              <div className="reset">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  onClick={this.resetTimer}
                />
                <button onClick={this.resetTimer}>Reset</button>
              </div>
            </div>

            <p>Set Timer Limit</p>
            <div className="timer-limit">
              <button onClick={this.reduceMinute}>-</button>
              <p>{minute}</p>
              <button onClick={this.increaseMinute}>+</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
