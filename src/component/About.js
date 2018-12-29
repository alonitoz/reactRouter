import React from 'react';
import { Route } from 'react-router-dom'
import Apple from './Apple';
import Pear from './Pear';
import Strawberries from './Strawberries';
import FruitNav from './FruitNav';

const About = (props) =>{
    const { match } = props;
    return (
    <div>
        <FruitNav {...props}/>
        <div>
            <Route path={`${match.path}/strawberries` } component={Strawberries} >Strawberries</Route>
            <Route path={`${match.path}/pear`} component={Pear} >Pear</Route>
            <Route path={`${match.path}/apple`} component={Apple} >Apple</Route>
        </div>

    </div>
)
}

export default About;