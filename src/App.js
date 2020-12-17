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
        <button disabled={isMakingRequest} onClick={() => handleButtonClick()}>demo</button>
      </header>
    </div>
  );
}

export default App;
