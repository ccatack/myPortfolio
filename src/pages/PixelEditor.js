import classNames from "classnames";
import React, {useEffect, useMemo, useState} from "react";


const borderWidth = 4;

export default function PixelEditor() {
    const [gridSize, setGridSize] = useState(4)
    const [cellSize, setCellSize] = useState(100)
    const [colorInput, setColorInput] = useState("#ff0000")
    const [mouseDown, setMouseDown] = useState(false)
    const [cellData, setCellData] = useState(Array(gridSize*gridSize).fill({ color: "#ffffff" }))

    const [mousePos, setMousePos] = useState({x: null, y: null})

    useEffect(() => {
        const updateMousePos = e => {
            console.log("updateMouse", mouseDown)
            if (!mouseDown) {
                return;
            }
            const mousePos = { x: e.clientX, y: e.clientY };

            let xval= Math.floor((mousePos.x - borderWidth) / cellSize);
            let yval = Math.floor((mousePos.y - borderWidth) / cellSize);
            let index = (yval * gridSize) + xval;

            console.log({index, colorInput});

            setCellData((prevCells) => {
                console.log("before:",prevCells);
                prevCells[index].color = colorInput;
                console.log("after:",prevCells);
                
                return prevCells;
            });

            // pixel value for mouse, need to convert to cell location -> which index in cells

        }
        window.addEventListener('mousemove', updateMousePos)

        return () => {window.removeEventListener('mousemove', updateMousePos)}
    }, [mouseDown, colorInput])

    // const makeCells = () => {
    //     const newCells = []
    //     for (let i = 0; i < gridSize*gridSize; i++) {
    //         newCells[i] = <Cell mouseDown={mouseDown} colorInput={colorInput} key={i} />
    //     }
    //     return newCells
    // }

    // const cells = useMemo(makeCells, [mouseDown, colorInput, mousePos.x, mousePos.y, cellSize])
    // const cells = cellDatas.map((_, index) =>
    // <Cell mouseDown={mouseDown} colorInput={colorInput} key={index} />);

    const cells = cellData.map(({color}, index) => 
        <div style={{ backgroundColor: color}} key={index}></div>
    )

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
    console.log("render", mouseDown)


    return (
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <div style={{
                display: "grid",
                gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
                gridTemplateRows: `repeat(${gridSize}, ${cellSize}px)`, 
                borderWidth: borderWidth, 
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

function Cell({colorInput, mouseDown, mousePosX, mousePosY, cellSize}) {
    const [color, setColor] = useState("#ffff")

    const cellRef = React.useRef()
    let xPos = null
    let yPos = null

    useEffect(() => {
        xPos = cellRef.current.offsetLeft
        yPos = cellRef.current.offsetTop
    }, [])

    useEffect(() => {
        // console.log(mousePosX)
        if (mousePosX >= xPos && mousePosX < xPos+cellSize) {
            if (mousePosY >= yPos && mousePosY < yPos+cellSize) {
                colorChange()
            }
        }
    }, [mousePosX, mousePosY])

    const handleClick = () => {
        colorChange()
    }

    const colorChange = () => {
        setColor(colorInput)
    }

    return (
        <div style={{ backgroundColor: color }} onClick={handleClick} ref={cellRef}></div>
    )
}

/* 
get react dev tool to work
apply track mouse location with state

push to master and make new branch
*/