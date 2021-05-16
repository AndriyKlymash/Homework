import {
    Link
} from "react-router-dom"

export default function SingleUserElement({item, url}) {
    return (
        <div>
            {item.id}. {item.email}
            <img src={item.avatar} alt={item.first_name}/>
            <Link to={url + '/' + item.id}>
                <button>user details</button>
            </Link>
        </div>
    );
}