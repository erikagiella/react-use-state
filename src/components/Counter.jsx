import { useState } from "react"

export default function Counter() {


    // CREA LO STATE QUI

    const [count, setCount] = useState(0);

    return (
        <div>

            <h1 className={
                count > 0
                    ? "green"
                    : count < 0
                        ? "red"
                        : ""
            }>{count}</h1>

            <button onClick={() => setCount(count => count - 1)}>
                -
            </button>

            <button onClick={() => setCount(count => count + 1)}>
                +
            </button>

            <p >
                {
                    count > 0
                        ? "Positivo"
                        : count < 0
                            ? "Negativo"
                            : "Zero"
                }
            </p>

        </div>
    )
}