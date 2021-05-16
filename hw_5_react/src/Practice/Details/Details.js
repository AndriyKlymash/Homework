import {useEffect, useState} from "react";

export default function Details(props) {
    let {match: {params: {id}}} = props
    const [list, setList] = useState(null);
    useEffect(() => {
        fetch('https://reqres.in/api/users/'+id )
            .then(value => value.json())
            .then(value => {
                setList(value)
            })
    }, [id])

    return (
        <div>
            {
                list&& <h2>Hello</h2>
            }

        </div>
    );
}