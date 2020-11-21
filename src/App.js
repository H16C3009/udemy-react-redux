import React, { Component } from 'react';

class App extends Component{
  render() {
    //const greeting = "Hello Yoshi";
    //const dom = <h1 className="foo">{ greeting }</h1>;
    //return dom;
    return (
      //<div>
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={ () => {console.log("I am clicked.")}} /> 
      </React.Fragment>
      //</div>
    )
  }
}

export default App;
