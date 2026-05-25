import { useState } from "react";
import languages from "../assets/languages.js"

export default function CardsBonus() {

    const [activeId, setActiveId] = useState(1);
    const selectedLanguage = languages.find(language => language.id === activeId);

    console.log(selectedLanguage)

    function toggleLanguage(id) {
        setActiveId(id);
    }

    return (
        <div className="container">
            <h1 className="text-center">Learn Web development</h1>
            <ul className="list-group list-unstyled d-flex flex-row gap-2 my-3 ">
                {languages.map((language) => (
                    <li key={language.id}>
                        <button
                            className={`
                            btn
                            align-self-start
                            rounded
                            px-3 py-2
                            fw-bold
                            ${activeId === language.id ? "btn-warning" : "btn-primary"}
                        `}
                            onClick={() => toggleLanguage(language.id)}>{language.title}</button>
                    </li>
                ))}
            </ul>
            <div className="card p-2 mb-2 border border-dark-subtle">
                <h2 className="card-title">{selectedLanguage.title}</h2>
                <div className="card-description">{selectedLanguage.description}</div>
            </div>
        </div >
    )

}