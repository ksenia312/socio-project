import React, {useEffect} from 'react';
import './App.css';
import Enter from "./companents/enter/enter";
import InGame from "./companents/inGame/inGame";
import Route from "react-router-dom/es/Route";
import DiscussionContainer from "./companents/discussion/discussionContainer";
import Finish from "./companents/finish/finish";
import Main from "./companents/main/main";
import {Redirect, Switch} from "react-router-dom";


const App = () => {

    return (
        <div className='main-pages'>
            <Switch>
                <Route path="/main"
                       render={() => <Main/>}
                />
                <Route path="/enter"
                       render={() => <Enter/>}
                />

                <Route path="/discussion"
                       render={() => <DiscussionContainer/>}
                />
                <Route path="/ingame"
                       render={() => <InGame/>}
                />
                <Route path="/finish"
                       render={() => <Finish/>}
                />
                <Redirect from='/' to="/enter"/>
            </Switch>
        </div>
    );
}
export default App;
