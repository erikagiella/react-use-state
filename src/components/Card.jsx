export default function Card({ language }) {
    return (
        <div className="card p-2 mb-2 p-3 border border-dark-subtle">
            <h2 className="card-title">{language.title}</h2>
            <div className="card-description">{language.description}</div>
        </div>
    )
}