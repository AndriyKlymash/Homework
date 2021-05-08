//по ДЗ:
// отримати данні про пости з jsonplaceholder ,
// та відобразити в компоненті posts.
// За рендер окремого поста відповідатиме компонент Post .
// В компоненті поста повинна бути кнопка, при кліку на яку поруч зі списком всіх постів з'являється обраний пост і його деталі.

import './App.css';
import Users from "./components/users/users";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <div className="App">
          <Users/>
        <Posts/>

    </div>
  );
}

export default App;
