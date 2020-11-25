import React from 'react';
import './App.css';
import Enter from "./companents/enter/enter";
import InGame from "./companents/inGame/inGame";
import Route from "react-router-dom/es/Route";
import DiscussionContainer from "./companents/discussion/discussionContainer";
import Finish from "./companents/finish/finish";

const App = () => {
    return (
        <div className='main-pages'>
            <Route path="/enter"
                   render={() =>  <Enter />}
            />
            <Route path="/discussion"
                   render={() =>  <DiscussionContainer />}
            />
            <Route path="/ingame"
                   render={() =>  <InGame/>}
            />
            <Route path="/finish"
                   render={() =>  <Finish />}
            />
        </div>
    );
}
export default App;
