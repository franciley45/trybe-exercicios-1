import React from "react";
import { Link } from 'react-router-dom';

class Componente2 extends React.Component {
    render() {
        return(
            <div>
            <h1>primeiro componente2</h1>
            <Link to='/'>volta pra menu </Link>
        </div>
        )
    }
}
export default Componente2;