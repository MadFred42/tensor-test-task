import React, { useState } from 'react';
import { Color } from '../../../../types/types';
import switchesTag from '../../../../svgs/switches_tag.svg';
import ColorPicker from '../../colorPicker';
import StylingHeader from '../../stylingHeader';

import './sectionsEdditorItems.css';

interface SectionsEdditorItemsProps {
    color: Color
};

const SectionsEdditorItems = ({ color }: SectionsEdditorItemsProps) => {
    const [isPicker, setIsPicker] = useState(false);

    const onClickPickerHandler = () => {
        setIsPicker(true);
    };
    
    const onActionCloseClickHandler = () => {
        setIsPicker(false);
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
            <div className='sections__edditor_picker'>
                <StylingHeader 
                    onActionCloseClickHandler={onActionCloseClickHandler} 
                    onBackTagClickHandler={onBackTagClickHandler} 
                    title='Выбор цвета' />
                <ColorPicker initialColor={color.color} key={color.description} />
            </div> }
        </div>
    );
}

export default SectionsEdditorItems;