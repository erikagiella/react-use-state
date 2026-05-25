import { useState } from "react";
import languages from "../assets/languages.js"

export default function CardsBonus() {

    const [activeId, setActiveId] = useState();


    function toggleLanguage(id) {
        setActiveId(activeId === id ? null : id);
    }

    return (
        <div className="container">
            <h1 className="text-center">Learn Web development</h1>
            <ul className="list-group d-flex flex-row list-unstyled">
                {languages.map((language) => (
                    <li>
                        <button>{language.title}</button>
                    </li>
                ))}
            </ul>
        </div >
    )

}