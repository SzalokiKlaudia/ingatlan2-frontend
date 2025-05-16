import logo from './logo.svg';
import './App.css';
import Ingatlanok from './components/Ingatlanok';
import Urlap from './components/Urlap';

function App() {
  return (
    <div className="App cont d-flex flex-column min-vh-100">
      <header className="App-header w-100 bg-light">
       <h1 className='text-center'>Ajánlataink</h1>
      </header>
      <div className='section container flex-grow-1'>
        <Ingatlanok/>


      </div>
      <div className='urlap container flex-grow-1'>
        <Urlap/>

      </div>
      <footer className='text-center bg-light mt-auto fw-bold'>Szalóki Klaudia</footer>
    </div>
  );
}

export default App;
