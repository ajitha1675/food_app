import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import ImproveSkill from "./components/ImproveSkill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <Herosection />
        <ImproveSkill />
      </div>
    </div>
  );
}

export default App;
