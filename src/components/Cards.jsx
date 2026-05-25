import { useState } from "react";
import languages from "../assets/languages.js"

export default function Cards() {

    const [activeId, setActiveId] = useState();


    function toggleLanguage(id) {
        setActiveId(id);
    }

    return (
        <div className="container">
            <h1 className="text-center">Learn Web development</h1>
            <div className="d-flex flex-column">
                {languages.map(language => (
                    <div className="card" key={language.id}>
                        <button className={activeId === language.id ? "btn btn-warning" : "btn btn-primary"} onClick={() => toggleLanguage(language.id)}>{language.title}</button>
                        {
                            activeId === language.id &&
                            (
                                <div className="card-text">{language.description}</div>
                            )
                        }
                    </div>
                ))}
            </div>
        </div>
    )

}