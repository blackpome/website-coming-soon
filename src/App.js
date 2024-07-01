import logo from './logo.svg';
import arils from './assets/arils.png'
import pulp from './assets/pulp.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={arils} className="arilstopright" alt="arils" />
        <p className="comingsoon-text">
          coming soon
        </p>

        <div className="App-logo-container">
          <div className="App-logo">
            <img src={logo} alt="logo" />
          </div>
          {/* <div className="pulp right"> */}
          <img src={pulp} className="pulp" alt="logo" />
          {/* </div> */}
        </div>
        
      </header>

    </div>
  );
}

export default App;
