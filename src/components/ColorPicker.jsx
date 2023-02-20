import React from 'react'
import './color_picker.css'
import { useState, useEffect } from 'react'

const ColorPicker = () => {
    const [data, setData] = useState(270);

    useEffect(() => {
        const color = getComputedStyle(document.documentElement).getPropertyValue('--primary-hue')
        console.log(color)
    }, []);
  
    function setColor(color) {
    document.documentElement.style.setProperty('--primary-hue', color)
    };

    //   onClick={() => setColor(270)} 

    return (
        <div id='color-picker-wrapper'>
            <input id='color-picker' type='range' min={0} max={360} step={1} value={data} onChange={(e) => setData(e.target.value)}/>
            <h4 className="">{data}</h4>

            <button onClick={() => setColor(data)} className='btn primary'>Change Color</button>
        </div>

  )
}

export default ColorPicker