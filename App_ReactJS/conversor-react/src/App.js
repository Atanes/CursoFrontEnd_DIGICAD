import './App.css';
import './components/Conversor';
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <div className="linha">
        <div>
          <Conversor moedaA='BRL' moedaB='USD' />
        </div>
        <div>
          <Conversor moedaA='USD' moedaB='BRL' />
        </div>
      </div>
      <div className="linha">
        <div>
          <Conversor moedaA='BRL' moedaB='CAD' />
        </div>
        <div>
          <Conversor moedaA='CAD' moedaB='BRL' />
        </div>
      </div>
    </div>
  );
}

export default App;
