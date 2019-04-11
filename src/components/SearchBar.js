import React from 'react'
import { connect } from 'react-redux'

class SearchBar extends React.Component {

  // changeHandler = () => {
  //   const event.target.value
  // }

  render() {
    console.log(this.props.players);
    return(
      <div>
        <form className="search">
          <input
            placeholder="Search for...."
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { players: state.players }
}


export default connect(mapStateToProps)(SearchBar)
