import React from "react";
import Menu from './Menu';
import Footer from './Footer';
import {Card,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import squats from "../assets/images/advices/about0.gif"
import highknees from "../assets/images/advices/about1.gif"
import shoulderpress from "../assets/images/advices/about2.gif"

const AIExercises = () => {
  return (
    <div>
    <Menu/>
    <div className='row container-fluid d-flex justify-content-center'>
      <Card style={{ width: '18rem', margin:'2px' }}>
  <Card.Img variant="top" src={squats}/>
  {/* <img src={Squat}/> */}
  <Card.Body>
    
    <Card.Text>
     The squat is a dynamic strength training exercise that requires several muscles in your upper and lower body to work together simultaneously.
Adding squats to your workouts can help boost your exercise performance, decrease your risk of injury, and keep you moving more easily throughout the day. But these are just a few of the benefits.
    </Card.Text>
    
  </Card.Body>
  <Button variant="primary" href="https://sandip-rocks.github.io/FitClickAi/exercises/squats/squats.html">Squart AI</Button>
</Card>
<Card style={{ width: '18rem', margin:'2px' }}>
  <Card.Img variant="top"src={highknees}/>
  <Card.Body>
   
    <Card.Text  className="text-center">
      The high knees exercise is a combination of the run in place with exaggerated knee lifts.
      You should start this exercise slowly and with few repetitions. Start with 30 second sets and, once you’re comfortable with the exercise, add some extra challenges. You can lift your knees higher, increase the duration of the sets or perform the exercise at a faster pace.
    </Card.Text>
    
  </Card.Body>
  <Button variant="primary" href='https://sandip-rocks.github.io/FitClickAi/exercises/high-knees/high-knees.html'>High Knees AI</Button>
</Card>
<Card style={{ width: '18rem', margin:'2px'}}>
  <Card.Img variant="top" src={shoulderpress} />
  <Card.Body>
    
    <Card.Text  className="text-center">
      The overhead press is often called the shoulder press, but while all three heads of your shoulders are indeed working with the lift, they’re far from the only muscles used. Your abs, your lower back and the muscles surrounding your shoulder blades are all involved in pressing the weight overhead, and if you progress to a standing version of the exercise your glutes, hamstrings and quads are also enlisted to add stability.
    </Card.Text>
    
  </Card.Body>
  <Button variant="primary" href='https://sandip-rocks.github.io/FitClickAi/exercises/shoulder-press/shoulder-press.html'>Shoulder Press AI</Button>
</Card>
</div>
    <Footer/>
    </div>
  );
};

export default AIExercises ;