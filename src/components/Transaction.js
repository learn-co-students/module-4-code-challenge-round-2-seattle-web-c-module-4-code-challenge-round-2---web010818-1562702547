import React from 'react'

const Transaction = (props) => {
  const use = props
  return (
    <tr key={use.id}>
      <td>{use.posted}</td>
      <td>{use.description}</td>
      <td>{use.category}</td>
      <td>{use.amount}</td>
    </tr>
  )
}

export default Transaction
