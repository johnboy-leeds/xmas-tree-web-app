import './App.css';

function App() {
  const handleButtonClick = () => {
    fetch('https://johnboy.ngrok.io/tree/demo', {method: 'POST'})
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleButtonClick}>click me</button>
      </header>
    </div>
  );
}

export default App;
