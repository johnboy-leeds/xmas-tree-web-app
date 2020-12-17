import './App.css';
import Buttons from './components/Buttons';
import Webcam from './components/Webcam';
import ApiStatusCheck from './components/ApiStatusCheck'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApiStatusCheck>
          <Buttons />
        </ApiStatusCheck>
        <Webcam />
      </header>
    </div>
  );
}

export default App;
