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
                    <li key={language.id}>
                        <button onClick={() => toggleLanguage(language.id)}>{language.title}</button>
                    </li>
                ))}
            </ul>
            <div className="card p-2 mb-2 border border-dark-subtle">
                <h2 className="card-title">TML</h2>
                <div className="card-texy">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti itaque nam aliquid aperiam pariatur consequuntur id, omnis modi veritatis tempore voluptatum provident amet, dolorum illum doloremque eveniet tempora maxime?</div>

            </div>


        </div >
    )

}