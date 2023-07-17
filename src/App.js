import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Schedule from './Schedule.js';

const players = [
  { title: 'De\'aaron Fox', id: 1, position: "Point Guard", img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTZggNZD_yJGGArXNOrdJy6eeBzVJu1hjgjgnNjJAfbWApquCMmC96IzHvpI2D1Wpsy90PGf_tNp5vPT8k" },
  { title: 'Kevin Huerter', id: 2, position: "Shooting Guard", img: "https://cdn.nba.com/teams/uploads/sites/1610612758/2022/11/Schuh-8618.jpg"},
  { title: 'Harrison Barnes', id: 3, position: "Small Forward",img:"https://ca-times.brightspotcdn.com/dims4/default/97743dc/2147483647/strip/false/crop/5293x3529+0+0/resize/1486x991!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F53%2F34%2Ffdc58ef3799e87df3fda1a0bfdf1%2F1d3c9c84edc04f5eb6f9cd6486826024" },
  { title: 'Keegan Murray', id: 4, position: "Power Forward", img: "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Faroyalpain.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1515614786-850x560.jpeg"},
  { title: 'Domantas Sabonis', id: 5, position: "Center", img: "https://bloximages.chicago2.vip.townnews.com/gazettetimes.com/content/tncms/assets/v3/editorial/5/7f/57f91c65-7349-572d-a126-f1db02dc57e3/64a1d323996c6.image.jpg?resize=1200%2C800" },
];

function App() {
  return (
    <div>
       <h1 className = "Header"> Welcome to a Kings Fanpage! </h1>
       <p className = "Roster">Current Starting Five</p>
       <ul className = "Player-List">
        {players.map((player, id) =>
          <li key = {id}>{player.title} <img src = {player.img}></img> <p>{player.position}</p></li>
        )}
       </ul>
       <img class = "logo" src = "https://sportslogohistory.com/wp-content/uploads/2018/01/sacramento_kings_2016-present-a.png"></img>
       <div class = "Schedule"> <button onClick = {handleClick}> Schedule</button> </div>
       <Router>
           <div className="Links">
              <ul>
                <li>
                  <Link to="/schedule">Schedule</Link>  
                </li>
              </ul>
              <Routes>
                 <Route exact path='/schedule' element={< Schedule />}></Route>
            </Routes>
           </div>
       </Router>
    </div>
  );
}

function handleClick(){
  alert("Schedule not released yet!");
}


export default App;
