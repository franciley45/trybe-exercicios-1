
import './App.css';
import Menu from './componets/Menu';
import Componente2 from "./componets/componente2";
import Componente3 from "./componets/componente3";
import Componente4 from "./componets/componente4";
import { Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <div className="App">
        franciley
      </div>
      <Route exact path="/componets/componente2" component={Componente2} />
      <Route exact path="/componets/componente3" component={Componente3} />
      <Route exact path="/componets/componente4" component={Componente4} />
      <Route exact path='/' component={Menu} />
    </div>


  );
}

export default App;
