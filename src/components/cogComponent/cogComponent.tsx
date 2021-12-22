import React, { useContext } from 'react';
import { Context } from '../..';

import './cogComponent.css';

function CogComponent() {
    const mainStore = useContext(Context);

    const onClickHandler = () => {
        mainStore.isClickedHandler(true);
    };

    return ( 
        <div className='cog__main'>
            <i 
                className="cog__main-item fas fa-cog"
                onClick={onClickHandler} />
        </div>
    )
};

export default CogComponent;