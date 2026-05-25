import { useState } from "react";
import languages from "../assets/languages.js"
import Button from "./Button.jsx";
import Card from "./Card.jsx";

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
            <Card
                key={activeId}
                language={selectedLanguage}
            />
        </div >
    )

}