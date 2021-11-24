// import { useState } from 'react';
import "./Counter.css";
import Count from './CounterSiblings/Count';
import CountAction from './CounterSiblings/CountAction';

const Counter = () => {
    return (
        <div className="Counter">
            <h1>Counter App</h1>
            <Count />
            <CountAction />
        </div>
    )
}

export default Counter
