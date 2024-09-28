import React from 'react';
import cl from "./Styles.module.scss"
export const Counter = () => {
    const [count, setCount] = React.useState(0)

    const increment = () => {
        setCount((prev) => prev + 1);
    }

    return (
        <div>
            <button className={cl.button} onClick={increment}>Click inc</button>
            <h1>Count: {count}</h1>
        </div>
    );
}