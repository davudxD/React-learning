import { useReducer } from 'react';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log(state)
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error(`Unsupported action type: ${action.type}`);
    }
    
}


const Counter =() => {
    const [count, dispatch] = useReducer(counterReducer, 0);

    function handleIncrementClick() {
        dispatch({ type: 'INCREMENT' });
    }

    function handleDecrementClick() {
        dispatch({ type: 'DECREMENT' });
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrementClick}>Increment</button>
            <button onClick={handleDecrementClick}>Decrement</button>
        </div>
    );
}

export default Counter;