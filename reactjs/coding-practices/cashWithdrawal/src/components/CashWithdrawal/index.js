// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  denomination = value => {
    const {balance} = this.state
    if (balance >= value) {
      this.setState({balance: balance - value})
    }
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="app-container">
        <div className="profile">
          <h1 className="profile-icon">S</h1>
          <h1 className="user-name">Sarah Williams</h1>
        </div>

        <div className="balance">
          <h1>Your Balance</h1>
          <div className="rupees">
            <h1>{balance}</h1>
            <p>In Rupees</p>
          </div>
        </div>

        <div className="withdraw-container">
          <h2>Withdraw</h2>
          <h3>CHOOSE SUM (IN RUPEES)</h3>
          <div className="denominations">
            {denominationsList.map(eachItem => (
              <DenominationItem
                item={eachItem}
                key={eachItem.id}
                denomination={this.denomination}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
