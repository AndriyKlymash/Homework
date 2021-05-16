import {
    Link
} from "react-router-dom";

export default function ListUser({item, url, avatar}) {
    return (
        <div>
            {item.id}. {item.first_name} - {item.email}
            <img src={avatar} alt={item.first_name}/>
            <Link to={url + '/' + item.id}>
                <button> details</button>
            </Link>
        </div>
    );
}