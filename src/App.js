import './App.css';
import { useState } from 'react';

function App() {
  const [isMakingRequest, setMakingRequest] = useState(false)
  const handleButtonClick = async () => {
    setMakingRequest(true)
    await fetch('https://johnboy.ngrok.io/tree/demo', {method: 'POST', mode: 'no-cors'})
    setMakingRequest(false)
  }

  return (
    <div className="App">
      <header className="App-header">
      
        <iframe border={0} title="cam" src="https://johnboy-cam.ngrok.io/" height={480} width={640} />
   
        <button style={{ margin: 24, padding: 24 }} disabled={isMakingRequest} onClick={() => handleButtonClick()}>demo</button>
      </header>
    </div>
  );
}

export default App;
