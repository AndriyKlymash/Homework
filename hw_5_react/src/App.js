//Головна сторінка має лінки на сторінки з юзерами та постами з jsonplaceholer.
//При кліку на лінку юзерс відбувається перехід на сторінку зі всіма юзерами.
// В кожного юзера є кнопка-лінка, при кліку на яку відображаються всі тільки його пости.
//Та сама ситуація з постами, тільки при кліку на окремий пост відображається коментарі цього поста
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import Users from "./Users/Users";
import ListUsers from "./Practice/List-users/ListUsers";

import Posts from "./Posts/Posts";
import SingleUser from "./Practice/Single-user/SingleUser";

function App() {
    return (
        <Router>
            <div>
                <div><Link to={'users'}>to users</Link></div>
                <div><Link to={'posts'}>to posts</Link></div>
                <hr/>
                <br/>
                {/*Це практична*/}
                {/*Беремо цю апі - https://reqres.in/*/}
                {/*з неї використовувати тільки get запити на list users та single user.*/}
                {/*На головній сторінці є роут який одразу відображає  користувачів. (Зауважте, що апі не віддає всіх користувачів,а має queryParametr/serach з назвою page , який характеризує пагінацію, та віддає по 10 об'єктів за один запит).*/}
                {/*Внизу є 2 кнопки при натисканні на які ви ідете до наступної/попередньої сторінки (змінюючи page параметр).*/}
                {/*при клыку на користувача відбувається перехід на сторінку з детальною інформацією користувача*/}
                <div><Link to={'/users-list'}>to users list</Link></div>
                <div><Link to={'/single-user'}>to single user</Link></div>


                <Switch>
                    <Route path={'/users'} render={(props)=>{
                        return <Users {...props}/>
                    }}/>

                    <Route path={'/posts'} render={(props)=>{
                        return <Posts {...props} />
                    }}/>


                    {/*=================PRACTICE===============*/}
                    <Route path={'/users-list'} component={ListUsers}/>
                    <Route path={'/single-user'} render={(props) => {
                        return <SingleUser {...props}/>
                    }}/>

                </Switch>
            </div>
        </Router>

    );
}

export default App;
