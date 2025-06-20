import {education,stack} from './notes'

function About(){

    return(
    <>
        
        <h1> About me</h1>
        <div class= "about-container">
        <p id="aboutme" style={{paddingLeft: '30px', paddingRight: '50px', fontSize: '24px' , lineHeight: '1.5', color: '#789be2'}}>
                    I am a <strong>Frontend web developer</strong> and <strong>UI/UX artist </strong>with a Bsc (Hons) in
                    Computer Science from the University of the West of England.
                    Experienced in building responsive, user-friendly web applications
                    through freelance projects, with expertise in HTML, CSS, JavaScript,
                    React, and Figma. Along with my robust background in art and
                    programming, I have a strong passion for bringing ideas to life from
                    conception to the final product.
            </p>
            <div id="aboutPhoto"
            style={{border: '1px solid',
                borderRadius: '17px',
                marginRight: '17px',
                height:'300px',
                overflowY: 'auto',
                padding: '10px',
                backgroundColor: '#eff5ff'
            }}> 
                <ul className="about-items">
                    <li style={{borderBottom: "1px solid grey", padding: '20px'}}>
                    <h2 className="titlesA">Stack</h2>
                    <br/>
                    {stack.map((group, index) => (
                        <div key={index}>
                        <strong>{group.title}</strong>
                        <p>{group.items.join(', ')}</p>
                        <br/>
                        </div>
                    ))}

                    </li>

                    <br/>
                 
                    <li style={{borderBottom: "1px solid grey", padding: '20px'}}>
                        <h2 className="titlesA">Education</h2>
                        <br/>
                        <h3>{education[0].title}</h3>
                        <p>{education[0].school}</p>
                        <p>{education[0].classification}</p>
                        <br/>
                    </li>

                    <br/>

                    <li style={{borderBottom: "1px solid grey" , padding: '20px'}}> 
                        <h2 className="titlesA">Experience</h2>
                        <br/>

                    </li>
                    <br/>
                    
                    
                </ul>
            </div>

        </div>
    </>
    );
}

export default About;