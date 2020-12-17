import { useState } from 'react';

function Buttons() {
  const [isMakingRequest, setMakingRequest] = useState(false)
  const handleButtonClick = async (command) => {
    setMakingRequest(true)
    await fetch(`https://johnboy.ngrok.io/tree/${command}`, {method: 'POST', mode: 'no-cors'})
    setMakingRequest(false)
  }

  const commands = [
    'blue',
    'yellow',
    'red',
    'twinkle',
  ];

  const bgColour = command => ['blue', 'red', 'yellow'].includes(command)  ? command : '#dedede'
  const fontColour = command => ['blue', 'red'].includes(command) ? '#fff' : '#222'

  return (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: 24,
          width: 300,
          maxWidth: '80vh'
        }}>
          {commands.map(command => (
            <button
                key={command}
                style={{
                  borderRadius: 12,
                  border:0,
                  padding: 12,
                  background: bgColour(command),
                  color: fontColour(command)
                }}
                disabled={isMakingRequest}
                onClick={() => handleButtonClick(command)}
            >
              {command}
            </button>
          ))}
        </div>
  );
}

export default Buttons;
