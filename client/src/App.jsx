import React, { Suspense } from 'react' 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import { Spinner } from 'react-bootstrap' 

import { GlobalProvider } from './shared/context/GlobalState' 
import NavBar from './shared/components/NavBar' 
// import Footer from './shared/components/Footer'
// import Play from './score/pages/Play' 
// import Scoreboard from './score/pages/Scoreboard' 
import './App.css' 
// import FooterPage from './shared/components/Footer' 

const Play = React.lazy(() => import('./score/pages/Play')) 
const Scoreboard = React.lazy(() => import('./score/pages/Scoreboard')) 
const Home = React.lazy(() => import('./shared/components/home'))
const About = React.lazy(() => import('./shared/components/About'))

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <NavBar />
        <Suspense
          fallback={
            <Spinner animation="border" variant="primary" className="spinner" />
          }
        >
          <Switch>
            <Route path="/" exact component={Play}></Route>
            <Route path="/scoreboard" exact component={Scoreboard}></Route>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route
              path="/scoreboard/:playerId"
              exact
              component={Scoreboard}
            ></Route>
          </Switch>
        </Suspense>
        <footer className='footer   py-3 bg-dark text-white mb-0'>
        <div className='container text-center'>All Right Reserved by QUIZ-TIME &copy; 2021</div>
         
      </footer>
      </Router>
    </GlobalProvider>
  ) 
} 

export default App 
