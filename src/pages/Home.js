import Herosection from "../components/Herosection";
import ImproveSkill from "../components/ImproveSkill";
import QuoteSection from "../components/QuoteSection";
import ChefSection from "../components/ChefSection";


export default function Home(){
  return(
    <div>
      <Herosection/>
      <ImproveSkill/>
      <QuoteSection/>
      <ChefSection/>
    </div>
  )
}