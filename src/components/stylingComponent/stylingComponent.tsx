import React from 'react';
import StylingHeader from './stylingHeader';
import StylingBody from './stylingBody';

import './stylingComponent.css';

function StylingComponent() {
    const title = 'Стили оформления';

    return (
        <div className='styling__module'>
            <StylingHeader title={title} />
            <StylingBody />
        </div>
    );
};

export default StylingComponent;