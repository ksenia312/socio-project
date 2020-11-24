import React from 'react';
import './App.css';
import Enter from "./companents/enter/enter";
import Discussion from "./companents/discussion/discussion";
import InGame from "./companents/inGame/inGame";
import Route from "react-router-dom/es/Route";




const App = (props) => {

    return (
        <div className='main-pages'>
            <Enter />
            <Route path="/discussion"
                   render={() =>  <Discussion />}
            />
            <Route path="/ingame"
                   render={() =>  <InGame/>}
            />

        </div>

    );
}

export default App;
