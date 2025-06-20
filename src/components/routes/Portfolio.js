function Portfolio(){
    var portfolio = [
        {title: "UI/UX Designs", desc:"", link: "",},
        {title: "Illustrations", desc:"", link: "https://www.behance.net/gallery/216827033/2024-Illustrations",},
        {title: "Animations", desc:"", link: "",},
        {title: "Sketches", desc:"", link: "",},
    ]
    return(
    <>
    <h1>Portfolio</h1>
    <ul className="portfolio">
        {portfolio.map ((port, index) => (
            <li 
            key = {index}
            className="port"
            style={{ animationDelay: `${0.2 * index}s` }}>
                {port.title}
                {port.desc}
                {port.desc}
                <a href = {`${port.link}`}>Go</a>

            </li>
        ))

        }

    </ul>
    </>
    );
}

export default Portfolio;