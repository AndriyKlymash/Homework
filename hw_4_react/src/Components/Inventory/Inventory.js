import {useEffect, useState} from "react";
import {getInventory} from "../../Services/api";
import InventoryElement from "../InventoryElement/InventoryElement";

export default function Inventory({url}) {
    console.log(url)
    let [inventory, setInventory] = useState([]);
    console.log(inventory)

    useEffect(()=>{
        getInventory().then(value => setInventory(value.data))
    },[])

    return(
        <div>
            {
                inventory.map((value)=><InventoryElement
                key={value.id}
                id={value.id}
                title={value.title}
                category={value.category}
                url={url}
                />)
            }
        </div>
    );
}