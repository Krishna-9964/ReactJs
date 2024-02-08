// Write your code here
const DenominationItem = props => {
  const {item, denomination} = props

  const denominationClicked = event => {
    denomination(event.target.value)
  }

  return (
    <button type="button" onClick={denominationClicked} value={item.value}>
      {item.value}
    </button>
  )
}

export default DenominationItem
