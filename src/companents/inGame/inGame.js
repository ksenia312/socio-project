import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import ListLeftContainer from "./listLeft/listLeftContainer";
import style from "./InGame.module.css"
import DiscussionContainer from "../discussion/discussionContainer";


const InGame= (props) => {
    useEffect(() => {
        const interval = setTimeout(() => {
            <DiscussionContainer/>
        }, 1);
        return () => clearTimeout(interval);
    }, []);
    return (
        <div className={style.ingame}>
            <div className={style.block}>
                <NavLink exact to="/discussion">
                    <button className={style.but}>Назад</button>
                </NavLink>
                <h1 className={style.words}>В игре остались:</h1>
            </div>
                <ListLeftContainer />


        </div>

    );
}

export default InGame;