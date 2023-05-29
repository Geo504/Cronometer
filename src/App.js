import './App.css';

import { Cronometer } from './Components/Cronometer/Cronometer';
import { Timer } from './Components/Timer/Timer';

function App() {
  return (
    <>
      <nav>
        <div className="nav nav-tabs justify-content-center">
          <button className="nav-link button active" data-bs-toggle="tab" data-bs-target="#nav-cronometer">
            <i className="fa-solid fa-stopwatch"></i>
          </button>
          <button className="nav-link button" data-bs-toggle="tab" data-bs-target="#nav-timer">
            <i className="fa-regular fa-hourglass-half"></i>
          </button>
        </div>
      </nav>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="nav-cronometer">
          <Cronometer />
        </div>
        <div className="tab-pane fade" id="nav-timer">
          <Timer />
        </div>
      </div>
      
    </>
  );
}

export default App;
