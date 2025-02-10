import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <Herosection />
      </div>
    </div>
  );
}

export default App;
