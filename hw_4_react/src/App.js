//Беремо цю апі -https://sampleapis.com/api-list/futurama.
// Головна сторінка - 2 роути на персонажів та інвентар.
// При кліку на відповідний роут - перехід на сторінку зі списком персонажів/інвентаря (коротка інформація)
// При кліку на конкрентний елемент - перехід на сторінку  цього елементу з детальною інформацією.
// З урахуванням того, що апі не надає можливості отримати поодинокі обєкт,
// продумайте,як ви будете діставати їх на окремій сторінці з деталями.
import './App.css';
import Cast from "./Components/Cast/Cast";
import Inventory from "./Components/Inventory/Inventory";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CastDetails from "./Components/cast-details/CastDetails";
import InventoryDetails from "./Components/inventory-details/InventoryDetails";

function App() {
    return (
        <Router>
            <div>
                <div><Link to={'cast'}>to cast</Link></div>
                <div><Link to={'inventory'}>to inventory</Link></div>
                <hr/>
                <Switch>
                    <Route exact={true} path={'/cast'} render={(props) => {
                        return <Cast {...props}/>
                    }}/>
                    <Route exact={true} path={'/cast/:id'} component={CastDetails}/>

                    <Route exact={true} path={'/inventory'} render={({match: {url}}) => {
                        return <Inventory url={url}/>
                    }}/>
                    <Route path={'/inventory/:id'} component={InventoryDetails}/>

                    {/*    <Route path={'/inventory'} render={(props)=>{*/}
                    {/*        return <Inventory {...props}/>*/}
                    {/*    }}/>*/}
                </Switch>
                <hr/>
            </div>
        </Router>
    );
}

export default App;
