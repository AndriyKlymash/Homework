import './characterComponents.css'

function CharacterComponent(props) {
    // let cls='';
    // if (props.h2==='Porshe'){
    //     cls='carPorshe';
    // } else {
    //     cls='carAudi';
    // }
    let cls = props.h2 === 'Porshe' ? 'porshe-class' : 'audi-class'
    return <div className={cls}>
        <h2>{props.h2}</h2>
        <img
            src={props.image}
            alt=""/>
        <p>{props.description}</p>
        <p>{props.informationPorshe}</p>
        <p>{props.informationAudi}</p>
        <p>{props.informationBMW}</p>
    </div>
}

export default CharacterComponent;
