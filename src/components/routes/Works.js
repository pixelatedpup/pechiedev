import { useState } from 'react';
import littlelemon from '../llp.png';
import archarcades from '../Archarcades.png';
import sunset from '../SunsetCinema.png'
import luna from '../LunaComics.png'

function Works() {
   const works = [
    {   
        title: "Arch Arcades",
        tools: "Figma, React, JavaScript, TailwindCSS", 
        description: "A website for a local arcade that shows available games and current high scores using an API. The mockups, wireframes and case study can be viewed in Figma. The website is still in progress and can be tracked using the GitHub link.", 
        duration: "2 months", 
        img: archarcades,
        git: "https://github.com/pixelatedpup/archarcades.git",
        ux: "https://www.figma.com/design/BnrdiFaGesFvgOKNbqN135/Arch-Arcades?node-id=0-1&t=FWae244hu33WCsnm-1",
        prototype: "https://pixelatedpup.github.io/archarcades/"
    },
    {   
        title: "Sunset Cinemas",
        tools: "Figma", 
        description: "UX Design for a cinema snack ordering application. The prototype can be viewed on Figma, but the code is still in progress.", 
        duration: "2 months", 
        img: sunset,
        git: "",
        ux: "https://www.figma.com/design/WOFTb63byDA1zXHgfyuEkS/Sunset-Cinemas?node-id=46-194&t=6OQCh2EQxwAfqBKZ-1",
        prototype: "https://example.com"
    },

    {   
        title: "Luna Comics", 
        tools: "Figma",
        description: "A website for looking for independent comics and magzines.", 
        duration: "1 month", 
        img: luna,
        git: "https://github.com/pixelatedpup/lunacomics.git",
        ux: "https://www.figma.com/design/Kna0diSuiVj27riXsZGaGK/Lunar-Comics?node-id=0-1&p=f&t=7QTDAm80oyFPxMyZ-0",
        prototype: "https://example.com"
    }
    // ,
    // {   
    //     title: "OGIUS", 
    //     tools: "Figma, React, JavaScript, TypeScript, TailwindCSS",
    //     description: "A portfolio website for illustrator and small business owner OGIUS. It was made in the sole intention to show past works, acquire clients and update fans", 
    //     duration: "N/A", 
    //     img: "projectA.jpg" ,
    //     git: "",
    //     ux: "",
    //     prototype: "https://example.com"
    // }
];



    const [hoveredWork, setHoveredWork] = useState(null);
    const[activeWork, setActiveWork] = useState(works[0].title);
    const activeItem = works.find(work => work.title === activeWork);
    const [hoveredButton, setHoveredButton] = useState(false)


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

                
            <div 
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
            className={`work-details ${activeWork ? 'visible' : ''}`}>
                {activeItem && (
                    <>
                        <div 
                        className="proj-img" 
                        style={{ borderRadius: "12px", backgroundColor: "black", position: 'relative' }}
                        onMouseEnter={() => setHoveredButton(true)}
                        onMouseLeave={() => setHoveredButton(false)}
                        >
                        <button 
                            onClick={() => window.open(activeItem.prototype, '_blank')}
                            className='goButton' 
                            style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 2,
                            opacity: hoveredButton ? 1 : 0,
                            pointerEvents: hoveredButton ? 'auto' : 'none',
                            transition: 'opacity 0.3s ease',
                            }}
                        >
                            Go
                        </button>

                        <img 
                            className="useImage" 
                            style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '12px',
                            display: 'block',
                            }} 
                            src={activeItem.img} 
                            alt={activeItem.title} 
                        />

                        <div className="imageBg"></div>
                        </div>

                        <div className='work-links' style={{ display: 'inline-flex', gap: '10px', textAlign: 'center', fontWeight: 'bold', paddingTop: '20px',margin: '0 auto'}}>
                                <h5 className={`git ${activeItem.git ? 'available': ''}`}><a style={{textDecoration: 'none', color:'white'}} href={activeItem.git}>GitHub </a></h5>
                                <h5><a style={{textDecoration: 'none', color:'white'}} href={activeItem.ux}>Figma</a></h5>
                        </div>

                        <div className="work-text" style={{justifyContent: 'left'}} >
                            <h3 style={{textAlign: 'center',paddingBottom:'60px'}}>{activeItem.title}</h3>
                            <h4> Relevant Tools/Languages: <strong style={{color: 'blue'}}>{activeItem.tools}</strong></h4>
                            <h4>Duration: {activeItem.duration}</h4>
                            <h5 style={{color: 'grey', paddingTop:'20px'}}>{activeItem.description}</h5>


                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Works;
