import React, { Component } from 'react';

const App = () => ( <Counter></Counter> )

class Counter extends Component {
  constructor(props) {
    super(props)
    //console.log(this.state)
    this.state = { count: 0 }
  }

  handleMinus = () => {
    //console.log("handleminus")
    //this.state = { count: this.state - 1 } 直接、値は変更できない
    this.setState({
      count: this.state.count - 1
    })
  }

  render () {
    console.log("render")
    //console.log(this.state)
    return (
      <React.Fragment>
        <div>count : { this.state.count }</div> 
        <button onClick={ () => {this.setState({ count: this.state.count + 1 })} }>+1</button>
        <button onClick={ this.handleMinus }>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
