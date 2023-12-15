import {Link} from "react-router-dom";
import van_image from "../images/hotel.jpg";


export default function About(){
    return(
        <div className="about-page-container">
            <img src={van_image}/>
            <div className="about-page-content">
                <h1>Dont squeeze in a sedan when you could relax in a van</h1>
                <p>
                Our mission is to entertain your road trip with the perfect travel van 
                rental. Our vans are recertified before each trip to ensure your travel
                plans can go off without a hitch.
                </p>
                <p>
                Our team is full of vanlife enthusiasts who know firsthand the magic of
                touring the world on 4 wheels.
                </p>
            </div>
            <div className="about-foot-cta">
                <h2>Your destination is waiting<br/> Your van is ready</h2>
                <Link className="link-button" to="/vans">Explore our vans.</Link>
            </div>
        </div>
    );
}