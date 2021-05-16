import {
    Link
} from "react-router-dom";

export default function Post({item, url}) {
    const element = <h1>Hello, world!</h1>;
    let path = url + '/' + item.id;
    return (
        <div>
            {item.id}. {item.title} <Link to={{pathname:path, state:item}}>
            <button>details</button>
        </Link>
        </div>
    );
}