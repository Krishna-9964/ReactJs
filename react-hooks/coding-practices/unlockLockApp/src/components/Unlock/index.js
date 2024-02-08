// Write your code here
import {useState} from 'react'
import UnlockStyling from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)

  const lockClicked = () => {
    setLock(prevState => !prevState)
  }
  return (
    <>
      <UnlockStyling />
      <div className="app-container">
        {isLocked ? (
          <img
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
        )}
        <p>Your Device is {isLocked ? 'Locked' : 'Unlocked'}</p>
        <button type="button" onClick={lockClicked}>
          {isLocked ? 'Unlock' : 'Lock'}
        </button>
      </div>
    </>
  )
}

export default Unlock
