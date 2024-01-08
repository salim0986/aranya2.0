import logo from "./assets/logo.png";
import mainPoster from "./assets/main_poster.png";
import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.jpg";
import p3 from "./assets/p3.jpg";
import "./app.scss";
function App() {

  const handleClick = (e)=>{
    console.log(e.target);
    e.target.textContent = "443";
    setTimeout(()=>{
      e.target.textContent = "Show Interests"
    },5000);
  }

  return (
    <div className="home">
      <div className="logoContainer">
        <img src={logo} alt="Logo of Aranya" />
      </div>
      <div className="registration">
    <div>
      <h2>Aranya 2.0</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit veniam, eligendi atque fugiat molestiae sit ab libero. Voluptatibus officiis mollitia animi aliquam natus, dolores unde eligendi? Porro ullam laborum cupiditate!</p>
      <a href="https://forms.gle/EFe4vJYVBZpV8BUk9">Register Now</a>
    </div>
    <img src={mainPoster} alt="Main Event Poster" />
      </div>
    <div className="posterContainer">
      <div>
      <img src={p1} alt="event 1" />
      <p>Event 1</p>
      <button onClick={e=>handleClick(e)}>Show Interests</button>
      </div>
      <div>
      <img src={p2} alt="event 2" />
      <p>Event 2</p>
      <button onClick={e=>handleClick(e)}>Show Interests</button>

      </div>
      <div>
      <img src={p3} alt="event 3" />
      <p>Event 3</p>
      <button onClick={e=>handleClick(e)}>Show Interests</button>

      </div>
      <div>
      <img src={p1} alt="event 4" />
      <p>Event 4</p>
      <button onClick={e=>handleClick(e)}>Show Interests</button>

      </div>
      <div>
      <img src={p2} alt="event 5" />
      <p>Event 5</p>
      <button onClick={e=>handleClick(e)}>Show Interests</button>

      </div>
      <div>
      <img src={p3} alt="event 6" />
      <p>Event 6</p>
      <button onClick={e=>handleClick(e)}>Show Interests</button>
      </div>
    </div>
    <footer>
    <div>
      <h4>Secretary:</h4>
      <a href="mailto:pichavaram-sec@ds.study.iitm.ac.in">pichavaram-sec@ds.study.iitm.ac.in</a>
    </div>
    <div>
      <h4>Deputy Secretary:</h4>
      <a href="mailto:pichavaram-ds@ds.study.iitm.ac.in">pichavaram-ds@ds.study.iitm.ac.in</a>
    </div>
    <div>
      <h4>Web Admin:</h4>
      <a href="mailto:pichavaram-webad@ds.study.iitm.ac.in">pichavaram-webad@ds.study.iitm.ac.in</a>
    </div>
    </footer>
    </div>
  )
}

export default App;
