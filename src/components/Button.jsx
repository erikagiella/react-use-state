export default function Button({ activeId, id, title, onToggle }) {
    return (
        <li>
            <button
                className={`
                            btn
                            align-self-start
                            rounded
                            px-3 py-2
                            fw-bold
                            ${activeId === id ? "btn-warning" : "btn-primary"}
                        `}
                onClick={() => onToggle(id)}>{title}</button>
        </li>
    )
}