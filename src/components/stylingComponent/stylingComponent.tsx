import React, { useContext } from 'react';
import StylingHeader from './stylingHeader';
import StylingBody from './stylingBody';

import './stylingComponent.css';
import { Context } from '../..';
import { Color } from '../../types/types';

function StylingComponent() {
    const title = 'Стили оформления';
    const colorEdditorStore = useContext(Context);
    
    const onBackTagClickHandler = () => {
        colorEdditorStore.backTagClickHandler(false);
    };

    const onActionApplyClickHandler = () => {
        const edditedSections: Array<Color> = [];
        Object.keys(colorEdditorStore.edditedSectionsColors).forEach((label: string) => {
            edditedSections.push(colorEdditorStore.edditedSectionsColors[label].title);
        });

        if (edditedSections.length > 0) {
            alert(`Разделы изменены: ${edditedSections.join(', ')}`);
        }
        
        colorEdditorStore.applyNewConfig();
    };

    const onActionCloseClickHandler = () => {
        colorEdditorStore.isClickedHandler(false);
    };

    return (
        <div className='styling__module'>
            <StylingHeader
                onActionApplyClickHandler={onActionApplyClickHandler} 
                onActionCloseClickHandler={onActionCloseClickHandler}
                onBackTagClickHandler={onBackTagClickHandler}  
                title={title} />
            <StylingBody />
        </div>
    );
};

export default StylingComponent;