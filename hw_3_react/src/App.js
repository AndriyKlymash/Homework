//по ДЗ:
// отримати данні про пости з jsonplaceholder ,
// та відобразити в компоненті posts.
// За рендер окремого поста відповідатиме компонент Post .
// В компоненті поста повинна бути кнопка, при кліку на яку поруч зі списком всіх постів з'являється обраний пост і його деталі.

import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/users/users";
import Posts from "./components/posts/Posts";

function App() {
    return (
        <Router>
            <div className="App">
                <Link to={'users'}>to users</Link>
                <br/>
                <Link to={'posts'}>to posts</Link>
                <Switch>
                    <Route path={'/users'} render={() => <Users/>}/>
                    <Route path={'/posts'} render={(props) => {
                        console.log(props)
                        return <Posts/>
                    }}/>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
