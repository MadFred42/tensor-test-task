import React, { useContext } from 'react';
import StylingHeader from './stylingHeader';
import StylingBody from './stylingBody';

import './stylingComponent.css';
import { Context } from '../..';

function StylingComponent() {
    const title = 'Стили оформления';
    const mainStore = useContext(Context);
    
    const onBackTagClickHandler = () => {
        mainStore.backTagClickHandler(false);
    };

    const onActionCloseClickHandler = () => {
        mainStore.isClickedHandler(false);
    };

    return (
        <div className='styling__module'>
            <StylingHeader onBackTagClickHandler={onBackTagClickHandler} onActionCloseClickHandler={onActionCloseClickHandler} title={title} />
            <StylingBody />
        </div>
    );
};

export default StylingComponent;