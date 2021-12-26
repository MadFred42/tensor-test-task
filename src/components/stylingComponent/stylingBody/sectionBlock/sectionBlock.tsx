import React, { useContext } from 'react';
import { Context } from '../../../..';
import nextTag from '../../../../svgs/next_tag.svg';
import { Sections } from '../../../../types/types';

import './sectionBlock.css';

interface ColorBlockProps {
    description: string,
    label: string,
};

function SectionBlock({ description, label }: ColorBlockProps) {
    const colorEdditorStore = useContext(Context);
    const initialColors = colorEdditorStore.sections.find((section: Sections) => section.label === label);

    const onClickHandler = (event: React.MouseEvent) => {
        colorEdditorStore.chosenSectionHandler((event.target as HTMLElement).id);
    };
    
    return (
        <>
            <div 
                className='styling__module_body-block'
                id={label}
                onClick={onClickHandler}
            >
                <div className='styling__module_body-colors' id={label}>
                    {initialColors && initialColors.colors.map(color => 
                        (<div id={label} key={color.title} style={{backgroundColor: `${color.color}`}} />)
                    )}
                </div>
                <div className='styling__module_body-description'>
                    <p className='description' id={label}>{label}</p>
                    <p className='description description-light' id={label}>{description}</p>
                </div>
                <img alt='next tag' className='next_tag' id={label} src={nextTag} />
            </div>
        </>
    );
};

export default SectionBlock;