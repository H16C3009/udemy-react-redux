import React from 'react';

const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "hanako", age: 18 },
    { name: "No Name" }
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

User.defaultProps = {
  age: 0
}

export default App;
