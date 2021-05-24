import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Home from './Home.jsx';
import Singup from './Singup.jsx';
import Navbar from './Navbar';
import About from './About.jsx';
import Project from './Project.jsx';
import Contact from './Contact.jsx';
import HashLoader from "react-spinners/ClockLoader";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const override = `
position: absolute;
cursor: pointer;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`;
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])
  return (
    <div className="App">
      {
        loading ?
          <HashLoader css={override} size={200} color={"#094b65"} loading={loading} /> :
          <div className="page">
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
