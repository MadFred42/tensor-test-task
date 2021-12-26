import React, { useContext } from 'react';
import { Context } from '../..';
import cogIcon from '../../svgs/cog_icon.svg';

import './cogComponent.css';

function CogComponent() {
    const colorEdditroStore = useContext(Context);

    const onClickHandler = () => {
        colorEdditroStore.isClickedHandler(true);
    };

    return ( 
        <div className='cog__main'>
            <img
                alt='cog icon' 
                className="cog__main-item"
                onClick={onClickHandler}
                src={cogIcon} />
        </div>
    )
};

export default CogComponent;