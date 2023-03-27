import classNames from "classnames";
import React, {useState} from "react";



export default function PixelEditor() {
    const [gridSize, setGridSize] = useState(48)
    const [cellSize, setCellSize] = useState(10)
    const [colorInput, setColorInput] = useState("#ffffff")

    const [mouseDown, setMouseDown] = useState(false)

    var initID = 0
    const newID = () => {
        var temp = initID
        initID += 1
        return temp
    }

    const [cellDatas, setCellDatas] = useState(new Array(gridSize*gridSize).fill({"bgColor": colorInput}))

    const handleColorInputChange = (e) => {
        const newColor = e.target.value
        setColorInput(newColor)
    }

    const handleCellColorChange = (indexOfCellClicked) => {
        setCellDatas(cellDatas.map((cd, cdIndex) => {
            if (cdIndex === indexOfCellClicked) {
                return {...cd, bgColor: colorInput}
            }
            return cd;
        }))
    }

    const handleMouseDown = () => {
        setMouseDown(true)
    }

    const handleMouseUp = () => {
        setMouseDown(false)
    }

    const cells = cellDatas.map(({ bgColor}, index) =>
        <Cell colorChange={handleCellColorChange} mouseDown={mouseDown} index={index} color={bgColor} key={index} />);



    return (
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <div style={{
                display: "grid",
                gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
                gridTemplateRows: `repeat(${gridSize}, ${cellSize}px)`, 
                borderWidth: 4, 
                borderColor: "#000000",
                borderStyle: "solid",
                width: "fit-content"
            }} >
                {cells}
            </div>
            <input className="" type="color" onChange={handleColorInputChange} value={colorInput} ></input>
            {mouseDown && <div>down</div>}
        </div>
    )
}

function Cell({colorChange, index, color, mouseDown}) {
    const handleMouseEnter = () => {
        if (mouseDown) {
            colorChange(index)
        }
    }

    return (
        <div style={{ backgroundColor: color }} onMouseEnter={handleMouseEnter} ></div>
    )
}

/* 
in grid: track whether mouse is down or not in state
in the cell: pass mouse down state and trigger onmouseenter if mouse is down then change color
onclick -> change color which is triggered by drag or click

sometimes it doesnt correctly understand when the drag ends
when dragging, its spotty when moving the mouse too fast
cant just click pixels anymore because the mouse enters the cell before it mouses down
*/