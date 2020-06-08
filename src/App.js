import React from 'react';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import Jumbotron from './components/Jumbotron/Jumbotron';


import BottomNav from './components/BottomNav/BottomNav';

const App = () => {

    return (
        <div>
            <TopNav />
            <Jumbotron />
            {/* <Button /> */}
            <BottomNav />
        </div>
    )

}

export default App;
