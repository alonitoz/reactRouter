import React from 'react';
import {Link, Route} from "react-router-dom";
import Pear from './Pear';

const DisplayFruit = ({match}) => (
    <div>
        the match fruit is { match.params.fruitId}
    </div>
)

const Contact = ({match}) => (
    <div>
        <p>
            <Link to={`${match.url}/pear`}>Pear link</Link>
            <br/>
            <Link to={`${match.url}/apple`}>Apple link</Link>
            <Route path={`${match.path}/:fruitId`} component={DisplayFruit}/>
        </p>
    </div>
)

export default Contact;