import React from 'react' 
import {Button } from 'react-bootstrap'
import {useHistory } from 'react-router-dom';

const Home = () => {


    
    return (

<div className="container font0 text-center">
<h3  className="homepage mt-4 ">QUIZ<span className="homepage1">-TIME</span></h3>
<h2 className="font1">Test your knowledge with amazing and interesting facts, trivia, quizzes, and brain teaser games on Quiz-time.com</h2>
<h2 className="font1">Ready to prove that you're a knowledgeable?</h2>
<h2 className="font1">Let's begin</h2>

<Button className="btn btn-warning" onClick={() => window.history.push('/play') }>
   I'm ready
</Button>
</div>

);
}
export default Home;