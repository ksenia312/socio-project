import React from 'react';

import Button from "./button/button";
import MainWindow from "./mainWindow/mainWindow";

const Enter = (props) => {

    return (
        <div className='enter'>
            <Button way="/" name="Назад"/>
            <MainWindow />
        </div>
    );
}
export default Enter;