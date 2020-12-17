import './App.css';
import { useState } from 'react';

function App() {
  const [isMakingRequest, setMakingRequest] = useState(false)
  const handleButtonClick = async (command) => {
    setMakingRequest(true)
    await fetch(`https://johnboy.ngrok.io/tree/${command}`, {method: 'POST', mode: 'no-cors'})
    setMakingRequest(false)
  }

  const commands = [
    'blue',
    'yellow',
    'off',
    'demo',
  ];

  const isColour = color => ['blue', 'yellow'].includes(color)

  return (
    <div className="App">
      <header className="App-header">
        <iframe border={0} title="cam" src="https://johnboy-cam.ngrok.io/" height={480} width={640} />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          margin: 24,
          padding: 24,
          width: 400,
          maxWidth: '80vh'
        }}>
          {commands.map(command => (
            <button
                key={command}
                style={{
                  borderRadius: 12,
                  border:0,
                  padding: 12,
                  background: isColour(command) ? command : '#dedede',
                  color: command === 'blue' ? '#fff' : '#222'
                }}
                disabled={isMakingRequest}
                onClick={() => handleButtonClick(command)}
            >
              {command}
            </button>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
