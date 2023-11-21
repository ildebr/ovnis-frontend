import {Link} from "react-router-dom";
import "./sighting.scss"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export function Sighting({sighting}){

    const { pathname } = useLocation();
    return (
        <div className="sighting-element">
            {/* <Link to={`/sighting/${sighting.id}`}> */}
            {/* {{pathname: '/nextpath', state: { prevPath: location.pathname }} */}
            <Link to={{pathname: `/sighting/${sighting.id}`, state: { from: pathname }}}>
                <header className="sighting-title">
                    <h2>{sighting.title}</h2>
                </header>
                <p className="sighting-description">
                    {sighting.description.length > 40 ? sighting.description.substring(0,120) + '...' : sighting.description + 'b'}
                </p>
                <footer className="sighting-date">
                    <span>{sighting.date}</span>
                </footer>
            </Link>
        </div>
    )

}