import React from 'react';
import closeTag from '../../svgs/close_tag.svg';
import checkTag from '../../svgs/check_tag.svg';

import './actionsButtons.css';

interface ActionsButtonsProps {
    onActionApplyClickHandler: () => void;
    onActionCloseClickHandler: () => void;
}

const ActionsButtons = ({ onActionApplyClickHandler, onActionCloseClickHandler }: ActionsButtonsProps) => {

    return (
        <div className='actions'>
            <button 
                className='actions__check-button'
                onClick={onActionApplyClickHandler}
            >
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