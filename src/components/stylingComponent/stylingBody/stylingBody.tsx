import React from 'react';
import nextTag from '../../../svgs/next_tag.svg';

import './stylingBody.css';

function StylingBody() {
    const colors = [
        {color: '#333333'},
        {color: '#8A91A7'},
        {color: '#FFFFFF'},
        {color: '#587AB0'}
    ]

    return (
        <div className='styling__module_body'>
            <p className='styling__module_body-text'>ОСНОВНЫЕ ЦВЕТА</p>
            <div>
                <div className='styling__module_body-block'>
                    <div className='styling__module_body-colors'>
                        {colors.map(color => 
                            (<div style={{backgroundColor: `${color.color}`}}>

                            </div>)
                        )}
                    </div>
                    <div className='styling__module_body-description'>
                        <p className='description'>Оформление меню</p>
                        <p className='description description-light'>Настройте цвета меню</p>
                    </div>
                    <img alt='next tag' className='nextTag' src={nextTag} />
                </div>
                <div className='styling__module_body-block'>
                    <div className='styling__module_body-colors'>
                        {colors.map(color => 
                            (<div style={{backgroundColor: `${color.color}`}}>

                            </div>)
                        )}
                    </div>
                    <div className='styling__module_body-description'>
                        <p className='description'>Базовые элементы</p>
                        <p className='description description-light'>Цвета крупных элементов интерфейса</p>
                    </div>
                    <img alt='next tag' className='nextTag' src={nextTag} />
                </div>
            </div>
            <div className='styling__module_underline'></div>
            <p className='styling__module_body-text'>ДОПОЛНИТЕЛЬНЫЕ ЦВЕТА</p>
            <div>
                <div className='styling__module_body-block'>
                    <div className='styling__module_body-colors'>
                        {colors.map(color => 
                            (<div style={{backgroundColor: `${color.color}`}}>

                            </div>)
                        )}
                    </div>
                    <div className='styling__module_body-description'>
                        <p className='description'>Уведомления</p>
                        <p className='description description-light'>Цвета всплывающих подсказок</p>
                    </div>
                    <img alt='next tag' className='nextTag' src={nextTag} />
                </div>
            </div>
        </div>
    );
}

export default StylingBody;