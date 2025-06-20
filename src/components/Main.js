const Main = () =>{
    const fronts= [ {name: "HTML5"}, 
                    {name: "CSS3"},
                    {name: "JavaScript"},
                    {name: "TypeScript"},
                    {name: "ReactJS"},
                    {name: "Tailwind CSS"}]

    const backs= [      {name: "C#"},
                        {name: "NodeJS"},
                        {name: "Django"},
                        {name: "Flask"}
                    ]
    const databases= [ {name: "PostgreSQL"}, 
                        {name: "MongoDB"},
                        {name: "MySQL"}
                    ]
    return(
        <>
            <div className="intro">
                <h1 id="name">Hi, I'm <b>Pe</b>ter <b>Chie</b>meka.</h1>
                <p id="desc">
                <strong><br />
                A Frontend developer, UI/UX Designer, and Illustrator.</strong><br /> Focused on delivering high concept reliable designs.
                </p>
            </div>

            <div className="languages">
                <div>
                    <h4>Frontend</h4>
                    <ul >
                        {fronts.map((front,index)=>(
                            <li 
                            style={{ animationDelay: `${0.2 * index}s` }}
                            className="front"
                            key={index}>{front.name}</li>
                        ))}

                    </ul>
                </div>

                <div>
                    <h4>Backend</h4>
                    <ul >
                        {backs.map((back,index)=>(
                            <li 
                            style={{ animationDelay: `${0.2 * index}s` }}
                            className="back" 
                            key={index}>{back.name}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4>Database</h4>
                    <ul >
                        {databases.map((db, index)=>(
                            <li
                            style={{ animationDelay: `${0.2 * index}s` }}
                            className="db"
                            key={index}>
                                {db.name}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Main;