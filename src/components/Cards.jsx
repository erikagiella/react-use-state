import { useState } from "react";
import languages from "../assets/languages.js"

export default function Cards() {
    return (
        <>
            <h1>Learn Web development</h1>
            <div className="cards">
                {languages.map(language => (
                    <div className="card" key={language.id}>
                        <button>{language.title}</button>
                        <div className="card-title">{language.title}</div>
                        <div className="card-text">{language.description}</div>
                    </div>
                ))}
            </div>
        </>
    )

}