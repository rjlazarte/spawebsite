import React from 'react';
import Slides from './CarouselComponent';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';

function Home(props) {
    return (
        <React.Fragment>
            <Jumbotron fluid className="home-background">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center">WELCOME</h1>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <div className="container-fluid">
                <div className="row text-center mt-md-5">
                    <div className="col col-md-6 my-5 my-md-0">
                        <img className="mx-auto" src="../assets/images/hosanna.png" alt="hosanna" width="375px" />
                    </div>
                    <div className="col col-md-6 mt-md-5 pt-md-5">
                        <img className="" src="../assets/images/finished.png" alt="finished" width="400px" />
                    </div>
                </div>
                <hr className="hr-home mx-0 my-5"></hr>
                <div className="row my-5">
                    <div className="col-6 offset-4">
                        <h3>
                            <Link className="pastoral" to ="/letter">Letter from Pastor Noel</Link>
                        </h3>
                    </div>
                </div>
            </div>
            <Slides />
        </React.Fragment>
    );
}

export default Home;