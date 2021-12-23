import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../../..';
import { Color } from '../../../types/types';
import StylingHeader from '../stylingHeader';
import SectionsEdditorItems from './sectionsEdditorItems';

import './sectionsEdditor.css';

const SectionsEdditor = observer(() => {
    const mainStore = useContext(Context);
    const section = mainStore.chosenSections;
    
    const onActionCloseClickHandler = () => {
        mainStore.isChosenSectionHandler(false);
        mainStore.isClickedHandler(false);
    };

    const onBackTagClickHandler = () => {
        mainStore.isChosenSectionHandler(false);
    };
    
    return (
        <div className='sections__edditor'>
            <StylingHeader 
                onBackTagClickHandler={onBackTagClickHandler} 
                onActionCloseClickHandler={onActionCloseClickHandler} 
                title={section.title} />
            <div className='sections__edditor-block'>
                {section.colors.map((color: Color) => 
                    <SectionsEdditorItems key={color.title} color={color} />
                )}
            </div>
        </div>
    );
});

export default SectionsEdditor;