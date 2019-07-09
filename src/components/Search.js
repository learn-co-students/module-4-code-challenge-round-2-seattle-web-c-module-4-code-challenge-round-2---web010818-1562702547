import React from 'react'

const Search = (props) => {


  return (
    <div className="ui huge fluid icon input">
      <form onSubmit={props.handleSubmit}>
      <input onChange={props.handleChange} type="text" value={props.textInput}  placeholder={"Search your Recent Transactions"} />
      <i className="circular search link icon"></i>
    
      </form>
    </div>
  )
}


export default Search
