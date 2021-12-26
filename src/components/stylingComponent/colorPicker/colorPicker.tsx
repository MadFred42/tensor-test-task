import React from 'react';
import { HexColorPicker } from 'react-colorful';

import './colorPicker.css';

interface ColorPickerProps {
    color: string;
    setNewColor: (color: string) => void;
}

const ColorPicker = ({ color, setNewColor }: ColorPickerProps) => {

    return (
        <HexColorPicker className='color__picker' color={color} onChange={setNewColor} />
    );
}

export default ColorPicker;