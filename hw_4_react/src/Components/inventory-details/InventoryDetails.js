import {useEffect, useState} from "react";

export default function InventoryDetails(props) {
    let {match: {params: {id}}} = props;
    console.log(id)

    let [inventory, setInventory] = useState(null);
    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/inventory/' + id)
            .then(value => value.json())
            .then(value => {
                setInventory(value);
            })
    }, [id])

    return (
        <div>
            {inventory && JSON.stringify(inventory)}
        </div>
    );
}