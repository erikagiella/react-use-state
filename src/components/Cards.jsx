import { useState } from "react";
import languages from "../assets/languages.js"

export default function Cards() {

    const [activeId, setActiveId] = useState();


    function toggleLanguage(id) {
        setActiveId(activeId === id ? null : id);
    }

    return (
        <div className="container">
            <h1 className="text-center">Learn Web development</h1>
            <div className="d-flex flex-column">
                {languages.map(language => (
                    <div className="card p-2 mb-2 border border-dark-subtle" key={language.id}>
                        <button className={`
                            btn
                            align-self-start
                            rounded
                            px-3 py-2
                            mb-2
                            fw-bold
                            ${activeId === language.id ? "btn-warning" : "btn-primary"}
                        `}
                            onClick={() => toggleLanguage(language.id)}>{language.title}</button>
                        {
                            activeId === language.id &&
                            (
                                <div className="card-text">{language.description}</div>
                            )
                        }
                    </div>
                ))}
            </div>
        </div >
    )

}