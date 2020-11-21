import React from 'react';

// class App extends Component{
//   render() {
//     //const greeting = "Hello Yoshi";
//     //const dom = <h1 className="foo">{ greeting }</h1>;
//     //return dom;
//     return (
//       //<div>
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={ () => {console.log("I am clicked.")}} /> 
//       </React.Fragment>
//       //</div>
//     )
//   }
// }

const App = () => {
  return (
    <React.Fragment>
      <Cat />
      <Cat />
    </React.Fragment>
  );
}

const Cat = () => {
  return <div>にゃー！</div>;
}

export default App;
