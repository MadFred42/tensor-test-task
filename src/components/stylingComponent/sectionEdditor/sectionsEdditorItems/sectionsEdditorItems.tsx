import React, { useContext, useState } from 'react';
import { Color } from '../../../../types/types';
import switchesTag from '../../../../svgs/switches_tag.svg';
import ColorPicker from '../../colorPicker';
import StylingHeader from '../../stylingHeader';
import { Context } from '../../../..';

import './sectionsEdditorItems.css';

interface SectionsEdditorItemsProps {
    color: Color
};

const SectionsEdditorItems = ({ color }: SectionsEdditorItemsProps) => {
    const [isPicker, setIsPicker] = useState(false);
    const [newColor, setNewColor] = useState<string>(color.color);
    const colorEdditorStore = useContext(Context); 

    const onClickPickerHandler = () => {
        setIsPicker(true);
    };
    
    const onActionCloseClickHandler = () => {
        setIsPicker(false);
    };

    const onActionApplyClickHandler = () => {
        setIsPicker(false);
        colorEdditorStore.chosenSectionChangeColor(color.title, newColor);
    };
    
    const onBackTagClickHandler = () => {
        setIsPicker(false);
    };

    return (
        <div>
            <div 
                className='sections__edditor-module'
                onClick={onClickPickerHandler}
            >
                <div 
                    className='styling__module_body-colors' 
                    style={{ background: `${color.color}` }} />
                <div className='styling__module_body-description'>
                    <p className='description'>{color.title}</p>
                    <p className='description description-light'>{color.description}</p>
                </div>
                <img alt='switches tag' className='switches__tag' src={switchesTag} />
            </div>
            { isPicker && 
            <div className='sections__edditor_picker-background'>
                <div className='sections__edditor_picker'>
                    <StylingHeader 
                        onActionApplyClickHandler={onActionApplyClickHandler}
                        onActionCloseClickHandler={onActionCloseClickHandler} 
                        onBackTagClickHandler={onBackTagClickHandler} 
                        title='Выбор цвета' />
                    <ColorPicker color={newColor} setNewColor={setNewColor} />
                </div>
            </div> }
        </div>
    );
};

export default SectionsEdditorItems;