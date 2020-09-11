import React from 'react';
import './Main.css';
import '../Common/index.css';
import NavBar from '../NavBar/NavBar';
import Stage from '../Stage/Stage';
import { RecoilRoot } from 'recoil';

const Main = () => {
    return (
        <RecoilRoot>
            <NavBar />
            <Stage />
        </RecoilRoot>
    );
};

export default Main;
