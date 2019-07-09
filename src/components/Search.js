import React from 'react'

const Search = (props) => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        // value={event.target.value}
        onChange={props.handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
