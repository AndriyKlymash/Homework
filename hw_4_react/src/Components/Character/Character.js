import {
    Link
} from "react-router-dom";

export default function Character({name, id, url}) {
    return (
        <div>
                {id}. {name} - <Link to={url + '/' + id}>cast {id} details</Link>
        </div>
    );
}