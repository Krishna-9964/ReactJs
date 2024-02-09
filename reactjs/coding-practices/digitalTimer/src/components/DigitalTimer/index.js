// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    second: 0,
    minute: 25,
    isTimerRunning: false,
    isButtonDisabled: false,
    modifiedMinute: 25,
  }

  componentDidMount = () => {
    const {modifiedMinute} = this.state
    this.setState({minute: modifiedMinute})
  }

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

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
      this.resetTimer()
    }
  }

  startTimer = () => {
    this.timerId = setInterval(this.updateSeconds, 1000)
    this.setState({isTimerRunning: true, isButtonDisabled: true})
  }

  pauseTimer = () => {
    console.log(this.timerId)
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false, isButtonDisabled: true})
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({
      isTimerRunning: false,
      minute: 25,
      second: 0,
      isButtonDisabled: false,
      modifiedMinute: 25,
    })
  }

  getTimer = () => {
    const {minute, second} = this.state
    const min = minute < 10 ? `0${minute}` : minute
    const sec = second < 10 ? `0${second}` : second
    return `${min}:${sec}`
  }

  addMoreMinute = () => {
    this.setState(prevState => ({
      modifiedMinute: prevState.modifiedMinute + 1,
      minute: prevState.modifiedMinute + 1,
    }))
  }

  reduceMoreMinute = () => {
    const {modifiedMinute} = this.state
    if (modifiedMinute > 0)
      this.setState(prevState => ({
        modifiedMinute: prevState.modifiedMinute - 1,
        minute: prevState.modifiedMinute - 1,
      }))
  }

  render() {
    const {modifiedMinute, isTimerRunning, isButtonDisabled} = this.state
    return (
      <div className="container">
        <h1>Digital Timer</h1>
        <div className="main-container">
          <div className="timer">
            <div className="time">
              <h1>{this.getTimer()}</h1>
              <p>{isTimerRunning ? 'Running' : 'Paused'}</p>
            </div>
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
                  type="button"
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
                <button type="button" onClick={this.resetTimer}>
                  Reset
                </button>
              </div>
            </div>

            <p className="info">Set Timer Limit</p>
            <div className="timer-limit">
              <button
                type="button"
                onClick={this.reduceMoreMinute}
                disabled={isButtonDisabled}
              >
                -
              </button>
              <p>{modifiedMinute}</p>
              <button
                type="button"
                onClick={this.addMoreMinute}
                disabled={isButtonDisabled}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
