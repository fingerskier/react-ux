import React from 'react';
import './App.css';
import Boxy from './Boxy'
import CircleButton from './CircleButton';
import Curvey from './Curvey'

function App() {
  const curvPath = `
    M 200 100 
    A 100 50 45 1 1 550 350
    L 400 150
    L 200 100
  `

  return (
    <div className="App">
      <svg height="800" width="1000">
        <Boxy />
        <Curvey 
          path={curvPath}
        />
        <CircleButton />
      </svg>
    </div>
  );
}

export default App;
