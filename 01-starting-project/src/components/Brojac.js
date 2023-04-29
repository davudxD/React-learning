import React, {useState, useEffect} from "react";

const MyComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Ova funkcija će se izvršiti nakon svakog renderovanja komponente
        console.log('Brojač se promijenio!');
    }, [count]); // useEffect će se izvršiti samo ako se 'count' promeni

    return (
        <div>
            <p>Brojač: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default MyComponent;