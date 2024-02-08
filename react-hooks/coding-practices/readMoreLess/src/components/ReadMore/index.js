// Write your code here
import {useState} from 'react'

import AppContainer from './styledComponents'

const ReadMore = () => {
  const [isShowMore, changeButtonValue] = useState(false)
  const onButtonClick = () => {
    changeButtonValue(!isShowMore)
  }

  return (
    <>
      <AppContainer />
      <div className="Main">
        <h1 className="heading1">React Hooks</h1>
        <h2 className="heading2">Hooks are a new addition to react </h2>
        <img
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
          className="image"
        />
        <div className="para">
          <p className="para1">
            Hooks solve a wide variety of seemingly unconnected problems in
            React that we have encountered over five years of writing and
            maintaining tens of thousands of components.
            {isShowMore &&
              `
              For curious readers, we have prepared a detailed RFC. Hooks allow
              you to reuse stateful logic without changing your component
              hierarchy. Hooks work side-by-side with existing code so you can
              adopt them gradually`}
          </p>
        </div>
        <button className="button" onClick={onButtonClick} type="button">
          {isShowMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </>
  )
}
export default ReadMore
