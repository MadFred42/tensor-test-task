import React, { useContext } from 'react';
import ActionsButtons from '../../actionsButtons';
import backTag from '../../../svgs/back_tag.svg';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';

import './stylingHeader.css';

interface StylingHeaderProps {
    onActionApplyClickHandler: () => void;
    onActionCloseClickHandler: () => void;
    onBackTagClickHandler: () => void;
    title: string;
}

const StylingHeader = observer(({
    onActionApplyClickHandler, 
    onActionCloseClickHandler, 
    onBackTagClickHandler, 
    title
}: StylingHeaderProps) => {

    const colorEdditorStore = useContext(Context);
    const isChosenSection = colorEdditorStore.isChosenSection;
    
    return (
        <div className='styling__module_header'>
            <div className='styling__module_header-body'>
                <div style={{ display: 'flex', height: '23px' }}>
                    { isChosenSection && 
                    <img 
                        alt='back tag' 
                        className='back_tag' 
                        onClick={onBackTagClickHandler}
                        src={backTag} /> }
                    <p className='styling__module_header-text'>{title}</p>
                </div>
                <ActionsButtons 
                    onActionApplyClickHandler={onActionApplyClickHandler}
                    onActionCloseClickHandler={onActionCloseClickHandler} />
            </div>
            { !isChosenSection && <p className='styling__module_header-description'>Здесь вы можете настроить цвета сайта</p> }
            { !isChosenSection && <div className='styling__module_underline'></div> }
        </div>
    );
});

export default StylingHeader;