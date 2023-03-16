import classNames from "classnames";
import React, {useState} from "react";


export default function PixelEditor({onChange}) {
    const [gridSize, setGridSize] = useState(48)
    const [cellSize, setCellSize] = useState(10)
    const [colorInput, setColorInput] = useState("#ffffff")
    const [cellDatas, setCellDatas] = useState(new Array(gridSize*gridSize).fill({"bgColor": colorInput}))

    
    const handleColorInputChange = (e) => {
        const newColor = e.target.value
        setColorInput(newColor);
        setCellDatas(cellDatas.map(cd => ({ bgColor: newColor })));
    }
   

    const cells = cellDatas.map(({ bgColor }, index) =>
        <div class onClick style={{ backgroundColor: bgColor }}></div>)

    return (
        <div>
            <div style={{
                display: "grid",
                gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
                gridTemplateRows: `repeat(${gridSize}, ${cellSize}px)`
            }} >
                {cells}
            </div>
            <input className="" type="color" onChange={handleColorInputChange} value={colorInput} ></input>
        </div>
    )
}