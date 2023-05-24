import {Link} from "react-router-dom";
import "./sighting.scss"
export function Sighting({sighting}){

    return (
        <div className="sighting-element">
            <Link to={`/sighting/${sighting.id}`}>
                <header className="sighting-title">
                    <h2>{sighting.title}</h2>
                </header>
                <p className="sighting-description">
                    {sighting.description}
                </p>
                <footer className="sighting-date">
                    <span>{sighting.date}</span>
                </footer>
            </Link>
        </div>
    )

}