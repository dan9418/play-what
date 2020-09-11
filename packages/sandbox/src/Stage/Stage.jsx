import React, { useState } from 'react';
import './Stage.css';

import Menu from '../Menu/Menu';
import ViewerManager from './ViewerManager';

const Stage = () => {
    return (
        <div className="stage">
            <ViewerManager />
            <Menu />
        </div>
    );
}

export default Stage;
