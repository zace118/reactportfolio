import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import Jumbotron from './components/Jumbotron/Jumbotron';
import BottomNav from './components/BottomNav/BottomNav';

const App = () => {

    return (
        <Router>
            <div>
                <TopNav />
                <Jumbotron />

                <Switch>

                    <Route path='/aboutMe'>
                        ABOUT ME GOES HERE
                    </Route>

                    <Route path='/portfolio'>
                        PORTFOLIO GOES HERE
                    </Route>

                    <Route path='/resume'>
                        RESUME GOES HERE
                    </Route>

                    <Route path='/contactMe'>
                        CONTACT ME GOES HERE
                    </Route>

                </Switch>


                <BottomNav />
            </div>
        </Router>

    )

}

export default App;
