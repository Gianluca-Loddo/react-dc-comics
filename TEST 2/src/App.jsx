import Header from './components/Header.jsx'
import Jumbotron from './components/Jumbotron.jsx'
import BlueBar from './components/BlueBar.jsx'   // Bonus richiesto
import Footer from './components/Footer.jsx'

import './App.css'  // Importazione del file CSS


const TEST = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES"];
const TEST_2 = [<li>CHARACTERS</li>, <li>COMICS</li>,<li>MOVIES</li>, <li>TV</li>, <li>GAMES</li>];


export default function App() {
  return (
    <>
      {/* esempi su come "stampare" dinamicamente una lista di array di oggetti o stringhe  fino ad arrivare al metodo MAP */}
      
      <div>
        {TEST}
      </div>

       <ul>
        {TEST_2}
      </ul>

      <ul>
        {TEST.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      {/* ================================================================================================================== */}
      
      
      <Header />
      <Jumbotron />
      <BlueBar />
      <Footer />
    </>
  )
}
