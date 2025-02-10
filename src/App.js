import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import ImproveSkill from "./components/ImproveSkill";
import QuoteSection from "./components/QuoteSection";
import ChefSection from "./components/ChefSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <Herosection />
        <ImproveSkill />
        <QuoteSection />
        <ChefSection />
      </div>
    </div>
  );
}

export default App;
