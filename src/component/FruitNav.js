import React from 'react';
import { Link } from 'react-router-dom';

const FruitNav = ({match}) => {
    return(
        <div>
            <Link to={`${match.url}/apple`} >Apple</Link>
            <br/>
            <Link to={`${match.url}/pear`} >Pear</Link>
            <br/>
            <Link to={`${match.url}/strawberries`} >Strawberries</Link>
        </div>
    )
}

export default FruitNav;