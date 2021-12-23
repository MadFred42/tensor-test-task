import React from 'react';
import closeTag from '../../svgs/close_tag.svg';
import checkTag from '../../svgs/check_tag.svg';

import './actionsButtons.css';

interface ActionsButtonsProps {
    onActionCloseClickHandler: () => void;
}

const ActionsButtons = ({ onActionCloseClickHandler }: ActionsButtonsProps) => {

    

    return (
        <div className='actions'>
            <button className='actions__check-button'>
                <img alt='check tag' src={checkTag} className='actions__check_tag' />
            </button>
            <button 
                className='actions__close_button'
                onClick={onActionCloseClickHandler}
            >
                <img alt='close tag' src={closeTag} className='actions__close_tag'></img>
            </button>
        </div>
    );
};

export default ActionsButtons;