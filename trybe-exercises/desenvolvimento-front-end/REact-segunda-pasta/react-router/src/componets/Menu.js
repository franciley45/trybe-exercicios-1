import React from "react";
import { Link } from "react-router-dom";
class Menu extends React.Component {
 

    render() {
        return(
            <div> 
                <h1>menu principal</h1>
                 <Link to='/componets/componente2'>vai para aba 2</Link><br></br>
                 <Link to='/componets/componente3'>vai para aba 3</Link><br></br>
                 <Link to='/componets/componente4'>vai para aba 4</Link><br></br>
            </div>
          
        )
    }
}
export default Menu;