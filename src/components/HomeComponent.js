import React from 'react';
import Slides from './CarouselComponent';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <React.Fragment>
            <h3><Link className="pastoral" to ="/letter">Letter from Pastor Noel</Link></h3>
            <Slides />
        </React.Fragment>
    );
}

export default Home;