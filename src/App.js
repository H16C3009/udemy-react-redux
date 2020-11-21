import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "hanako", age: 18 },
    //{ name: "No Name"}
    //{ name: 10 }
    //{ age: "10" }
  ];
  return (
    <React.Fragment>
      { 
        profiles.map( (profiles, index) => {
          return <User name={ profiles.name } age={ profiles.age } key={index} />
        })
      }
    </React.Fragment>
  );
}

const User = (props) => {
return <div>Hi! I am { props.name }, and { props.age } years old.</div>;
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

// User.defaultProps = {
//   age: 0
// }

export default App;
