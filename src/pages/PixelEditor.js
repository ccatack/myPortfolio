import classNames from "classnames";
import React, {useState} from "react";


export default function PixelEditor({onChange}) {
    const [gridSize, setGridSize] = useState(48)
    const [cellSize, setCellSize] = useState(10)
    const [colorInput, setColorInput] = useState("#ffffff")

    var initID = 0
    const newID = () => {
        var temp = initID
        initID += 1
        return temp
    }

    const [cellDatas, setCellDatas] = useState(new Array(gridSize*gridSize).fill({"bgColor": colorInput, "i" : newID()}))

    const handleColorInputChange = (e) => {
        const newColor = e.target.value
        setColorInput(newColor)
    }

    const handlePixelClick = (e) => {
        setCellDatas(cellDatas.map(cd => {
            if (cd.i == e.target.id) {
                console.log(cd.i)
                console.log(e.target.id)
                return { bgColor: colorInput, i: cd.i }
            }
            return { bgColor: cd.bgColor, i: cd.i }
        }))
    }

    const cells = cellDatas.map(({ bgColor, i }) =>  
        <div onClick={handlePixelClick} style={{ backgroundColor: bgColor }} id={i} ></div>)



    return (
        <div>
            <div style={{
                display: "grid",
                gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
                gridTemplateRows: `repeat(${gridSize}, ${cellSize}px)`, 
                borderWidth: 4, 
                borderColor: "#000000",
                borderStyle: "solid"
            }} >
                {cells}
            </div>
            <input className="" type="color" onChange={handleColorInputChange} value={colorInput} ></input>
        </div>
    )
}