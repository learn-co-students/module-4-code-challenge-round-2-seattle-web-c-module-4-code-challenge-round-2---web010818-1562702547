import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    textInput: '',
    list: []
  }

  componentDidMount(){
  	fetch('https://boiling-brook-94902.herokuapp.com/transactions')
  	  .then(resp => resp.json())
  	  .then(list => {
  	  	this.setState({list})
  	  })
  }

  handleSubmit = (e) => {
    e.preventDefault()

}

  handleChange = (event, textInput) => {
    console.log(textInput)

    event.preventDefault()

{/*tried using event target value*/}

    const currentState = [...this.state.list]
    const newState = currentState.filter(list => list.id === textInput.id)

    this.setState({
      textInput: newState
    })

  }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the AP


  render() {

    return (
      <div>
        <Search list={this.state.list} handleSubmit={this.handeSubmit} handleChange={this.handleChange} textInput={this.state.textInput} />
        <TransactionsList textInput={this.state.textInput} list={this.state.list}/>
      </div>
    )
  }
}

export default AccountContainer
