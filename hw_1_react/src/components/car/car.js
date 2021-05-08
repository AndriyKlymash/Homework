export default function Car(props) {
    let {producer, model, year, color, engine, volume, power,
        but,
        counter,
        inc,
        dec,
        res,
    } = props
    // let [cars, setCars] = useState(carsList);
    // const deleteCar = () => {
    //     cars.pop();
    //     console.log(cars)
    //     setCars([...cars]);
    //
    // };
    return (
        <div>
            <h2>{producer} {model}</h2>
            <p>Обєм: {volume} потужність:{power} </p>
            <div>{year} {color} Engine: {engine}</div>
            <div>{but} counter is {counter} {inc} {dec} {res}</div>
        </div>
    )
}