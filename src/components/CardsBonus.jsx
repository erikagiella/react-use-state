import { useState } from "react";
import languages from "../assets/languages.js"
import Button from "./Button.jsx";

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
            <ul className="list-unstyled d-flex flex-row gap-2 my-3 ">
                {languages.map((language) => (
                    <Button key={language.id}
                        activeId={activeId}
                        id={language.id}
                        title={language.title}
                        onToggle={toggleLanguage}
                    />

                ))}
            </ul>
            <div className="card p-2 mb-2 p-3 border border-dark-subtle">
                <h2 className="card-title">{selectedLanguage.title}</h2>
                <div className="card-description">{selectedLanguage.description}</div>
            </div>
        </div >
    )

}