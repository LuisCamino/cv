import Education from "../components/Education";
import Experience from "../components/Experience";
import Language from "../components/Languages";
import Habilities  from "../components/Habilities";
import Hero from "../components/Hero";

import { CV } from "../cv/cv";
const { hero} = CV;

const Home = () => {
    
  return (
    <>
        <Hero hero={hero} />
    
      <div>
      <Education/>
      </div>

      <div>
      <Experience/>
      </div>
       
      <div>
        <Language/>
      </div>

      <div>
        <Habilities/>
      </div>
      
     
    </>
  )
}

export default Home