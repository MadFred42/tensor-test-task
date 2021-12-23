import React, { useContext } from 'react';
import ActionsButtons from '../../actionsButtons';
import backTag from '../../../svgs/back_tag.svg';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';

import './stylingHeader.css';

interface StylingHeaderProps {
    title: string;
    onActionCloseClickHandler: () => void;
    onBackTagClickHandler: () => void;
}

const StylingHeader = observer(({ onActionCloseClickHandler, onBackTagClickHandler, title }: StylingHeaderProps) => {
    const mainStore = useContext(Context);
    const isChosenSection = mainStore.isChosenSection;
    
    return (
        <div className='styling__module_header'>
            <div className='styling__module_header-body'>
                <div style={{ display: 'flex' }}>
                    { isChosenSection && <img 
                        alt='back tag' 
                        className='back_tag' 
                        onClick={onBackTagClickHandler}
                        src={backTag} /> }
                    <h3 className='styling__module_header-text'>{title}</h3>
                </div>
                <ActionsButtons onActionCloseClickHandler={onActionCloseClickHandler} />
            </div>
            { !isChosenSection && <p className='styling__module_header-description'>Здесь вы можете настроить цвета сайта</p> }
            { !isChosenSection && <div className='styling__module_underline'></div> }
        </div>
    );
});

export default StylingHeader;