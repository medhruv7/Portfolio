import React, { useEffect, useState } from 'react';
import './App.css'
import Projects from './Projects/Projects';
import Welcome from './Welcome/Welcome';


function App() {

  const [loader, setLoader] = useState(true);
  const projectRef = React.createRef();

  useEffect(() => {
    setTimeout(() => setLoader(false), 1000);
  })

  return (
    <div className="App">
      { loader ?  
      <div className="loader">
        <div className="bar">
        </div>
        <div className="bar">
        </div>
        <div className="bar">
        </div>
      </div> : (
        <div>
          <div>
            <Welcome projectRef={projectRef}/>
          </div>
          <div ref={projectRef}>
            <Projects />
          </div>
        </div>
      )
    }
    </div>
  );
}

export default App;
