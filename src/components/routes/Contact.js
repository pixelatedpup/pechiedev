import { NavLink } from "react-router-dom";

function Contact(){
    return(
        <div className="contact-container">
            <h1> Contact me</h1>
            <ul style={{display:"inline-flex"}}> 
                <li><a href="https://www.linkedin.com/in/pechiedev/">LinkedIn</a></li>
                <li><a href="https://www.behance.net/ogius">Behance</a></li>
                <li><a href="https://www.upwork.com/freelancers/~01f9b7d9e9b4478404">Upwork</a></li>
            </ul>
            <input type={'text'} placeholder={"Name"} style ={{fontSize:'18px',alignItems: "left",  width: '300px', height: '30px', padding:'6px', border: "solid 1px grey", borderRadius:"6px"}}/>
            <textarea style={{fontSize:'18px', width: '600px', height:'200px', borderRadius: "12px", border: "solid 1px grey"}}></textarea>
            <button style={{height: '40px', width: '90px', borderRadius:'17px', color:'white', fontSize:'18px'}}> Submit</button>
        </div>
    );
}

export default Contact;