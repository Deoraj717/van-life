import {Link} from "react-router-dom";

export default function Nav(){
	return(
		<div class="nav-container">
			<div class="nav-box1">
				<Link to="/" class="nav-link1">#VANLIFE</Link>
			</div>
			<div class="nav-box2">
				<Link to="/about" className="nav-link">About</Link>
				<Link to="/vans" className="nav-link">Vans</Link>
			</div>
		</div>
	);
}