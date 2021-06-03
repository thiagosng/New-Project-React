import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  useEffect(() => {
    document.querySelector('h1').addEventListener('click', eventFn);
  }, []);

  useEffect(() => {
    console.log('C1:', counter, 'C2:', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1>
        C1: {counter} C2: {counter2} {''}
      </h1>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCounter2(counter2 + 1)}>
        + (2)
      </button>
    </div>
  );
}

export default App;
