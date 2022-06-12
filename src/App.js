import Info from './components/Info'
import './App.scss';
import './components/Info.scss';





const pull_data = (data) => {
  console.log("recibo "+data+" en la clase app"); 
}


function App() {
 

  return (
    <div className="app">
      
    <Info  func={pull_data}/>
    </div>
  );
}

export default App;

