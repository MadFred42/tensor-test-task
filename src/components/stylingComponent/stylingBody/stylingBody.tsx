import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../../..';
import SectionBlock from './sectionBlock';

import './stylingBody.css';

const StylingBody = observer(() => {
    const colorEdditorStore = useContext(Context);

    return (
        <div className='styling__module_body'>
            <div className='styling__module_body-main'>
                <p className='styling__module_body-text'>ОСНОВНЫЕ ЦВЕТА</p>
                {colorEdditorStore.sections.map((section: any) => 
                    section.section === "main" ? 
                    <SectionBlock key={section.label} description={section.description} label={section.label} /> : 
                    null
                )}
            </div>
            <div className='styling__module_underline'></div>
            <div  className='styling__module_body-additional'>
                <p className='styling__module_body-text'>ДОПОЛНИТЕЛЬНЫЕ ЦВЕТА</p>
                {colorEdditorStore.sections.map((section: any) => 
                    section.section === "additional" ? 
                    <SectionBlock key={section.label} description={section.description} label={section.label} /> : 
                    null
                )}
            </div>
        </div>
    );
});

export default StylingBody;