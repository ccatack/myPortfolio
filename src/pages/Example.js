import React from "react";

export default function Example() {

    const [count, setCount] = React.useState(0);

    function handleClick(e) {
        setCount((prevCount) => {
            return prevCount + 1
        });
    }

    return (
        <div>
            <button className="btn btn-success" onClick={handleClick}>count: {count}</button>
        </div>
    )
}