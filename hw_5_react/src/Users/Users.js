import {useEffect, useState} from "react";
import User from "../User/User";
import {Route} from "react-router-dom";
import UserDetails from "../User-details/UserDetails";

export default function Users({match: {url}}) {
    console.log(url)
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
    }, [])

    return (
        <div>
            {
                users.map(value => <User
                    key={value.id}
                    item={value}
                    url={url}
                />)
            }
            <Route path={'/users/:id'} component={UserDetails}/>
        </div>
    );
}