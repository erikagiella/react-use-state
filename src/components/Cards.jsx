import { useState } from "react";
import languages from "../assets/languages.js"

export default function Cards() {
    return (
        <>
            <h1>Learn Web development</h1>
            <div className="card">
                <button>Language</button>
                <div className="card-title">Title</div>
                <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempora in dicta quos voluptas delectus. Vero repellat quod asperiores, maiores quidem perspiciatis atque doloribus deleniti aliquid voluptatem dolorum animi mollitia!</div>
            </div>
        </>
    )

}