import {useEffect, useState} from "react";
import SingleUserElement from "../Single-user-element/SingleUserElement";

export default function SingleUser(props) {
    let {match:{url}}=props

    let [singleUser, setSingleUser] = useState([]);
    console.log(singleUser)
    useEffect(()=>{
        fetch('https://reqres.in/api/users')
            .then(value => value.json())
            .then(value => {
                setSingleUser(value.data)
            })
    },[])


    return(
        <div>
            {
                singleUser.map(value => <SingleUserElement
                key={value.id}
                item={value}
                url={url}
                />)
            }
        </div>
    );
}

