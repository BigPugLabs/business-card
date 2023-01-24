import headshot from "../assets/headshot.jpg"

export function Info() {
    return (
        <main>
            <img src={ headshot } alt="headshot" />
            <h1>BigPug</h1>
            <p>Superstack Engineer</p>
            <a href="#">bigpug.example.org</a>
            <div>
                <a href="#">email</a>
                <a href="#">Linkedin</a>
            </div>
        </main>
    )
}

