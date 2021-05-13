import {
    Link
} from "react-router-dom";

export default function InventoryElement({id, title, category, url}) {
    return (
        <div>
            {id}. {title} <b>Category:</b> {category} <Link to={url+'/'+id}>
            <button>inventory details</button>
            </Link>
        </div>
    );
}