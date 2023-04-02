import classNames from "classnames";
import React, {useMemo, useState} from "react";



export default function PixelEditor() {
    const [gridSize, setGridSize] = useState(48)
    const [cellSize, setCellSize] = useState(10)
    const [colorInput, setColorInput] = useState("#ff0000")
    const [mouseDown, setMouseDown] = useState(false)

    const makeCells = () => {
        const newCells = []
        for (let i = 0; i < gridSize*gridSize; i++) {
            newCells[i] = <Cell mouseDown={mouseDown} colorInput={colorInput} key={i} />
        }
        return newCells
    }

    const cells = useMemo(makeCells, [mouseDown, colorInput])
    // const cells = cellDatas.map((_, index) =>
    // <Cell mouseDown={mouseDown} colorInput={colorInput} key={index} />);

    const handleColorInputChange = (e) => {
        const newColor = e.target.value
        setColorInput(newColor)
    }

    const handleMouseDown = () => {
        setMouseDown(true)
    }

    const handleMouseUp = () => {
        setMouseDown(false)
    }

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

function Cell({colorInput, mouseDown}) {
    const [color, setColor] = useState("#ffff")

    const handleMouseEnter = () => {
        if (mouseDown) {
            colorChange()
        }
    }

    const handleClick = () => {
        colorChange()
    }

    const colorChange = () => {
        setColor(colorInput)
    }

    return (
        <div style={{ backgroundColor: color }} onMouseOver={handleMouseEnter} onClick={handleClick}></div>
    )
}

/* 
get react dev tool to work
apply track mouse location with state

push to master and make new branch
*/