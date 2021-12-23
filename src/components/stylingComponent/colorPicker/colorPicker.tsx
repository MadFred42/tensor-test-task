import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

import './colorPicker.css';

interface ColorPickerProps {
    initialColor: string;
}

const ColorPicker = ({ initialColor }: ColorPickerProps) => {
    const [color, setColor] = useState<string>(initialColor);

    return (
        <HexColorPicker className='color__picker' color={color} onChange={setColor} />
    );
}

export default ColorPicker;