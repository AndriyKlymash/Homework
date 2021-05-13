import React, {useEffect, useState} from "react";
import {getCharacters} from "../../Services/api";
import Character from "../Character/Character";
import CastDetails from "../cast-details/CastDetails";

export default function Cast({match: {url}}) {
    let [cast, setCast] = useState([]);

    useEffect(() => {
        getCharacters().then(value => setCast(value.data))
    }, [])

    return (
        <div>
            {
                cast.map((value) => <Character
                    key={value.id}
                    name={value.name}
                    id={value.id}
                    url={url}/>)
            }
        </div>
    );
}
