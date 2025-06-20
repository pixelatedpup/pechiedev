import { useState } from 'react';
import littlelemon from '../littlelemon.jpeg';

function Works() {
    const works = [


        { title: "Little Lemon",
                tools: "Figma, React, JavaScript", 
                description: "Mediterranean restaurant locaed in chicago ", 
                duration: "1 month", 
                img: littlelemon,
                git: "https://github.com/pixelatedpup/littlelemon1.git",
                ux: "",
                prototype: ""},

        { title: "Sunset Cinemas",
                tools: "Figma", 
                description: "Movie + snack combo ordering", 
                duration: "2 months", 
                img: "projectC.jpg",
                git: "",
                ux: "https://www.behance.net/gallery/228096589/Sunset-Cinemas",
                prototype: ""},

                { title: "Arch Arcades",
                    tools: "Figma", 
                    description: "Arcade app that shows available games and current high scores using an API", 
                    duration: "2 months", 
                    img: "projectC.jpg",
                    git: "",
                    ux: "https://www.behance.net/gallery/228096589/Sunset-Cinemas",
                    prototype: ""},

                { title: "Event Planner", 
                        tools: "Kotlin (Android Studio)",
                        description: "An event app that allows you to help users register for events around their local environment.\nApp features gamified elements to encourage a postive experience and friendly competion for users.", 
                        duration: "3 months", 
                        img: "projectA.jpg" ,
                        git: "",
                        ux: "",
                        prototype: ""},
    ];
    // ,
    //     { title: "White Lotus Hotel",
    //         tools: "Figma, React.js", 
    //         description: "Hotel booking site using React", 
    //         duration: "4 months", 
    //         img: "projectB.jpg",
    //         git: "",
    //         ux: "",
    //         prototype: ""},

    //     { title: "Lumon",
    //         tools: "Figma, React.js", 
    //         description: "Movie + snack combo ordering", 
    //         duration: "1 months",
    //         img: "projectC.jpg",
    //         git: "",
    //         ux: "",
    //         prototype: ""}

    const [hoveredWork, setHoveredWork] = useState(null);
    const[activeWork, setActiveWork] = useState(works[0].title);
    const activeItem = works.find(work => work.title === activeWork);


    return (
        <div className="works-section">
            <ul className="works-list">
                {works.map((work, index) => (
                    <li
                        key={index}
                        // onMouseEnter={() => setHoveredWork(work)}
                        className='work-item'
                        // onMouseLeave={() => setHoveredWork(null)}
                    >
                        
                        <h2 onClick={() => setActiveWork(work.title)}
                        className = {`title-item ${activeWork === work.title ? 'activeClick' : ''}` }>
                            {work.title}
                            </h2>
                        
                    </li>
                ))}
            </ul>

                
            <div className={`work-details ${activeWork ? 'visible' : ''}`}>
                {activeItem && (
                    <>
                        <div class="proj-img" style={{border:"solid 1px black", borderRadius:"12px", backgroundColor:"grey"}}>
                        <img style = 
                        {{    width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '12px',
                            display: 'block'}} src={activeItem.img} alt={activeItem.title} />
                        </div>
                        <div className="work-text" style={{justifyContent: 'left'}} >
                            <h3 style={{textAlign: 'center', marginBottom:'60px'}}>{activeItem.title}</h3>
                            <h4> Relevant Tools/Languages: <strong style={{color: 'blue'}}>{activeItem.tools}</strong></h4>
                            <h4>Duration: {activeItem.duration}</h4>
                            <h5 style={{color: 'grey'}}>Description: {activeItem.description}</h5>
                            <div className='work-links' style={{ display: 'inline-flex', gap: '20px', textAlign: 'center', fontWeight: 'bold', marginTop: '20px'}}>
                                <h5 ><a style={{textDecoration: 'none'}} href={activeItem.git}>GitHub </a></h5>
                                <h5><a style={{textDecoration: 'none'}} href={activeItem.ux}>Wireframes/Mockups</a></h5>
                                <h5><a style={{textDecoration: 'none'}} href={activeItem.prototype}>Prototype</a></h5>
                            </div>

                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Works;
