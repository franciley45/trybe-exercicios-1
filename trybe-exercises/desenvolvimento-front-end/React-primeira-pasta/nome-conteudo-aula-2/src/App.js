
import './App.css';
import Greeting from './exemplo1-'
import Image from './exemplo-2'
import Apps from './exemplo-3';

function App() {
  return (
    <div className="App">
     <Greeting name="Samuel" lastName="Silva" />
     < Image source= "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"   alternativeText="Cute cat staring"/>
    < Apps />
    </div>
  );
}

export default App;
