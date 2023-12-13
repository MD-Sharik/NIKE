import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <div id="block1">
      <img src="bg3.png" className="img" />
      <h1 id="intro">NIKE</h1>
    </div>
    <div id="block2">
      <p>INVEST IN <br/>
      GREATNESS</p>
    </div>
    </>
  );
}

export default App;
