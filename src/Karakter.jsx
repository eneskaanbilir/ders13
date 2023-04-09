import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faVenusMars, faTextHeight, faWeight } from "@fortawesome/free-solid-svg-icons";

function Karakter({person}) {

    return (
        <>
            <div className="col-md-6">
            <h1>{person.name}</h1>
            <p><FontAwesomeIcon icon={faBirthdayCake} /> Birth Year: {person.birth_year}</p>
            <p><FontAwesomeIcon icon={faVenusMars} />  Gender: {person.gender}</p>
            <p><FontAwesomeIcon icon={faTextHeight} /> Height: {person.height}</p>
            <p><FontAwesomeIcon icon={faWeight} /> Mass: {person.mass}</p>
            </div>
        </>
    )
}

export default Karakter