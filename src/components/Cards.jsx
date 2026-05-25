import { useState } from "react";
import languages from "../assets/languages.js"

export default function Cards() {

    const [activeId, setActiveId] = useState();


    function toggleLanguage(id) {
        setActiveId(id);
    }

    return (
        <>
            <h1>Learn Web development</h1>
            <div className="cards">
                {languages.map(language => (
                    <div className="item" key={language.id}>
                        <button onClick={() => toggleLanguage(language.id)}>{language.title}</button>
                        {
                            activeId === language.id &&
                            (
                                <div className="card">
                                    <div className="card-title">{language.title}</div>
                                    <div className="card-text">{language.description}</div>
                                </div>
                            )
                        }
                    </div>
                ))}
            </div>
        </>
    )

}