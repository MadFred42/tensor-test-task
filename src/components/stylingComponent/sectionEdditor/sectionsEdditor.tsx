import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../../..';
import { Color } from '../../../types/types';
import StylingHeader from '../stylingHeader';
import SectionsEdditorItems from './sectionsEdditorItems';

import './sectionsEdditor.css';

const SectionsEdditor = observer(() => {
    const colorEdditorStore = useContext(Context);
    const section = colorEdditorStore.chosenSection;
    const { title, colors } = section;
    
    const onActionCloseClickHandler = () => {
        colorEdditorStore.isChosenSectionHandler(false);
        colorEdditorStore.isClickedHandler(false);
    };

    const onActionApplyClickHandler = () => {
        colorEdditorStore.isChosenSectionHandler(false);
        colorEdditorStore.saveNewConfig();
    };

    const onBackTagClickHandler = () => {
        colorEdditorStore.isChosenSectionHandler(false);
    };
    
    return (
        <div 
            className='sections__edditor'
        >
            <div className='section__edditor_header'>
                <StylingHeader 
                    onActionApplyClickHandler={onActionApplyClickHandler}
                    onBackTagClickHandler={onBackTagClickHandler} 
                    onActionCloseClickHandler={onActionCloseClickHandler} 
                    title={title} />
            </div>
            <div className='sections__edditor-block'>
                {colors.map((color: Color) => 
                    <SectionsEdditorItems key={color.title} color={color} />
                )}
            </div>
        </div>
    );
});

export default SectionsEdditor;