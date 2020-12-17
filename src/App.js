import './App.css';
import Buttons from './components/Buttons';
import Webcam from './components/Webcam';
import ApiStatusCheck from './components/ApiStatusCheck'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>John's Christmas Tree</h1>
        <p>Use the buttons below to control the tree on my desk.</p>
        <Webcam />
        <ApiStatusCheck>
          <Buttons />
        </ApiStatusCheck>
      </header>
    </div>
  );
}

export default App;
