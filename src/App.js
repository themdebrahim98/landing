import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Home from './Home.jsx';
import Singup from './Singup.jsx';
import Navbar from './Navbar';
import About from './About.jsx';
import Project from './Project.jsx';
import Contact from './Contact.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Lottie from 'react-lottie';
import * as cycle from './json/cycle-animation.json'
import * as success from './json/success.json';

const defaultOption1 = {
  loop: true,
  autoplay: true,
  animationData: cycle.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const defaultOption2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      fetch("./images/forest.png" || "./images/bird1.png" || "./images/bird2.png" || "./images/rocks.png" || "./images/water.png")
        .then((response) => response.ok)
        .then((outBuff) => {
          setData(outBuff);
          setLoading(true);

          setTimeout(() => {
            setCompleted(true);
          }, 1000);
        });
    }, 2000);
  }, [data]);
  return (
    <div className="App">
      { !completed ? (
        !loading ?
          <Lottie options={defaultOption1}
            style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} height={300}
            width={300} /> : <Lottie options={defaultOption2}
              style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} height={300}
              width={300} />
      ) : <div className="page">
        <Navbar />
        <Switch>
          <Route exact path='/singup' component={Singup} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/project' component={Project} />
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
      }
    </div>
  )
}

export default App
