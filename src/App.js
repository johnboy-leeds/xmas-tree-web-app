import './App.css';
import Buttons from './components/Buttons';
import Webcam from './components/Webcam';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Buttons />
        <Webcam />
      </header>
    </div>
  );
}

export default App;
