import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions'

class App extends Component {

  render () {
    
    return (
      <React.Fragment>
        <div>count : { this.props.value }</div> 
        <button onClick={ this.props.increment } >+1</button>
        <button onClick={ this.props.decrement } >-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = ({ increment, decrement })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

export default connect(mapStateToProps, mapDispatchToProps)(App);
