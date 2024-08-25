import { useState } from 'react';

export default function Clicker() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Ви натиснули {count} разів</p>
            <button onClick={() => setCount(count + 1)}>
                +1
            </button>
        </div>
    );
}