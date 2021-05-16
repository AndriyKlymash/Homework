import {useEffect, useState} from "react";
import ListUser from "../List-user/ListUser";
import {Route} from "react-router-dom";
import Details from "../Details/Details";

export default function ListUsers(props) {
    let {match: {url}} = props;

    let [usersList, setUsersList] = useState([]);
    const [count, setCount] = useState(1);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=' + count)
            .then(value => value.json())
            .then(value => {
                setUsersList(value.data)
            })
    }, [count])

    const increment = () => {
        if (count >= 2) {
            return
        }
        setCount(count + 1)
    }

    const decrement = () => {
        if (count <= 0) {
            return
        }
        setCount(count - 1)
    }
    return (
        <>
            <div style={{display:"flex"}}>
                {
                    usersList.map(value => <ListUser
                        key={value.id}
                        avatar={value.avatar}
                        item={value}
                        url={url}
                    />)
                }
            </div>
            <Route  path={'/users-list:id'} component={Details}/>
            <button onClick={increment}>Next page</button>
            <button onClick={decrement}>Previous page</button>
        </>

    );
}