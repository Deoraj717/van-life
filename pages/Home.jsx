import {Link} from "react-router-dom";

export default function Home(){
    return(
        <div className="home-container" >
            <p><h1>You got the travel plans , we got the travel vans</h1></p>
            <p>Add adventures to your life by joining the #vanlife movement.
                Rent the perfect van to make your perfect road trip
            </p>
            <br/>
            <Link className="link-button" to="vans">Find your van</Link>
        </div>
    );
}