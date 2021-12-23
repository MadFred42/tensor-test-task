import React from 'react';
import SectionBlock from './sectionBlock';

import './stylingBody.css';

function StylingBody() {

    return (
        <div className='styling__module_body'>
            <p className='styling__module_body-text'>ОСНОВНЫЕ ЦВЕТА</p>
            <div>
                <SectionBlock description='Настройте цвета меню' label='Оформление меню' />
                <SectionBlock description='Цвета крупных элементов интерфейса' label='Базовые элементы' />
                
            </div>
            <div className='styling__module_underline'></div>
            <p className='styling__module_body-text'>ДОПОЛНИТЕЛЬНЫЕ ЦВЕТА</p>
            <div>
                <SectionBlock description='Цвета всплывающих подсказок' label='Уведомления' />
            </div>
        </div>
    );
}

export default StylingBody;