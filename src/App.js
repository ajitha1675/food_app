import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import ImproveSkill from "./components/ImproveSkill";
import QuoteSection from "./components/QuoteSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <Herosection />
        <ImproveSkill />
        <QuoteSection />
      </div>
    </div>
  );
}

export default App;
