import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Saludo from './components/Saludo'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
