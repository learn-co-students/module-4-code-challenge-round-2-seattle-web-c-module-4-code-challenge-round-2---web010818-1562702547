import React, {Component} from 'react'
import Transaction from './Transaction'

class TransactionsList extends Component {

  // sortTransactions= () => {
  //   this.props.uses.map((use) => {
  //     return <Transaction key={use.id} posted={use.posted_at} description={use.description} category={use.category} amount={uses.amount}
  //       })
  //       }

        render() {
          return (
            <table className="ui celled striped padded table">
              <tbody>
                <tr>
                  <th>
                    <h3 className="ui center aligned header">
                      Posted At
                    </h3>
                  </th>
                  <th>
                    <h3 className="ui center aligned header">
                      Description
                    </h3>
                  </th>
                  <th>
                    <h3 className="ui center aligned header">
                      Category
                    </h3>
                  </th>
                  <th>
                    <h3 className="ui center aligned header">
                      Amount
                    </h3>
                  </th>
                </tr>

                {this.props.uses.map((use) => {
                  return <Transaction key={use.id} posted={use.posted_at} description={use.description} category={use.category} amount={use.amount} />
                })
                }
                <Transaction uses={this.props.uses}/>

      </tbody>
    </table>
  )
}
}

export default TransactionsList
