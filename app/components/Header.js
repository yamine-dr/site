"use client";
import React from "react";

export default function Header(props) {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <div className="text-2xl text-center">
                {count}
            </div>
            <button
                onClick={() => setCount(prevCount => prevCount + 1)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                +
            </button>
        </div>
    );
}