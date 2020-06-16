import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Portfolio from './components/Portfolio/Portfolio';
import ResumeDiv from './components/ResumeDiv/ResumeDiv';
import Contact from './components/Contact/Contact';
import BottomNav from './components/BottomNav/BottomNav';


const App = () => {

    return (
        <Router>
            <div>
                <TopNav />


                <Switch>

                    <Route path='/'>
                        <Jumbotron />
                    </Route>

                    <Route path='/about'>
                        <Jumbotron />
                    </Route>

                    <Route path='/portfolio'>
                        <Portfolio />
                    </Route>

                    <Route path='/resume'>
                        <ResumeDiv />
                    </Route>

                    <Route path='/contact'>
                        <Contact />
                    </Route>

                </Switch>


                <BottomNav />
            </div>
        </Router>

    )

}

export default App;
