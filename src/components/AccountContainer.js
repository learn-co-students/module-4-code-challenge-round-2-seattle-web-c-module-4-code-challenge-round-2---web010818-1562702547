import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'
// import Transaction from './Transaction'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      uses: [],
      query: ''
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }


  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data => this.setState({
      uses: data
    }))

  }

  // filterChange = () => {
  //   if (this.state.uses.includes(this.state.query)) {
  //     this
  //   }
  // }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      query: event.target.value,
      // uses: this.state.uses.includes(this.state.query)? this.state.uses : null
    })
    // your code here
  }



  render() {

    return (
      <div>
        <Search uses={this.state.uses} handleChange={this.handleChange} query={this.state.query}/>
        <TransactionsList uses={this.state.uses} />
        {/* <Transaction /> */}
      </div>
    )
  }
}

export default AccountContainer
