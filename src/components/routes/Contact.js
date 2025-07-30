import { NavLink } from "react-router-dom";

function Contact(){
    return(
        <div className="contact-container">
            <h1 class="titlesCol"> Contact me</h1>
            <h2> pechiedev@gmail.com</h2>
            <ul style={{display:"inline-flex"}}> 
                <li><a href="https://www.linkedin.com/in/pechiedev/">LinkedIn</a></li>
                <li><a href="https://www.behance.net/ogius">Behance</a></li>
                <li><a href="https://www.upwork.com/freelancers/~01f9b7d9e9b4478404">Upwork</a></li>
            </ul>
        </div>
    );
}

export default Contact;