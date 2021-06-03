import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //const { reverse } = this.state;
  const [] = useState();
  const reverseClass = reverse ? 'reverse' : '';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <button type="button" onClick={this.handleClick}>
          Reverse {reverseClass}
        </button>
      </header>
    </div>
  );
}

// class App extends Component {
//   state = {
//     reverse: true,
//   };

//   handleClick() {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

//           <button type="button" onClick={this.handleClick}>
//             Reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
