import React from 'react';

function App() {

  return (
    <React.Fragment>
      <label htmlFor="foo">bar</label>
      <input type="text" onChange={() => {alert("hoge")}} />
    </React.Fragment>
  )
  
}



export default App;
