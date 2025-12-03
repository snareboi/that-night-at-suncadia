export default function Character({name, text}) {
    return (
        <div className="mb-10">
            <h1>
                {name}
            </h1>
            {text}
        </div>
    )
}