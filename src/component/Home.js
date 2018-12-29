import React from 'react';
import { Link, Route } from 'react-router-dom';
import Apple from './Apple';

const Home = ({match}) => {
    console.log('the match url:', match.url, 'the match path', match.path);
    return(
        <div>
            <p>
                <Link to={`${match.url}apple`}>show apple</Link>
            </p>
        </div>
        )
}



export default Home;