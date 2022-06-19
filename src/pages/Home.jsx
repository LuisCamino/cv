import Education from "../components/Education";
import Experience from "../components/Experience";
import Language from "../components/Languages";
import Habilities  from "../components/Habilities";
import Hero from "../components/Hero";
import About from "../components/About";



const Home = () => {
    
  return (
    <>
      <div>
        <Hero/>
      </div>   
      
      <div>
        <About/>
      </div>

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