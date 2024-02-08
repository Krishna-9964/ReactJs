// Write your code here
import {useState} from 'react'
import './index.css'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')

  const getCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const getCardHolder = event => {
    setCardHolder(event.target.value.toUpperCase())
  }

  return (
    <div className="container">
      <div className="card-details">
        <h1>CREDIT CARD</h1>
        <div className="card">
          <h1>{cardNumber}</h1>
          <br />
          <p>CARDHOLDER NAME</p>
          <h3>{cardHolder}</h3>
        </div>
      </div>

      <div className="input-details">
        <div className="input">
          <h3>Payment Method</h3>
          <input type="number" onChange={getCardNumber} value={cardNumber} />
          <input type="text" onChange={getCardHolder} value={cardHolder} />
        </div>
      </div>
    </div>
  )
}

export default CreditCard
