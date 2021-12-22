import React from 'react';
import ActionsButtons from '../../actionsButtons';

import './stylingHeader.css';

interface StylingHeaderProps {
    title: string
}

function StylingHeader({title}: StylingHeaderProps) {
    
    return (
        <div>
            <div className='styling__module_header'>
                <h3 className='styling__module_header-text'>{title}</h3>
                <ActionsButtons />
            </div>
            <p className='styling__module_header-description'>Здесь вы можете настроить цвета сайта</p>
            <div className='styling__module_underline'></div>
        </div>
    );
}

export default StylingHeader;