import React, {Component} from 'react';
import Home from './HomeComponent';
import Letter from './LetterComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/letter' component={Letter} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;