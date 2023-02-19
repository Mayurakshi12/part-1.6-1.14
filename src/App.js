import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './Components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [feedback, setFeedBack] =useState(false)
  const handleGood = () => {
   setGood(good+1);
   setAll(all+1);
   setAverage(average+1)
   setFeedBack(true)
  }
 
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setFeedBack(true)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average-1)
    setFeedBack(true)
  }

  const finalAverage=(average/all);
  const finalpositive = ((good*100)/all);

  
  return (
    <div>
      <h1>give feedback</h1>
      
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h1>statistics</h1>

      
      {
        feedback?
        <>
       
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {all}</div>
        <div>average {finalAverage}</div>
        <div>positive {finalpositive}%</div>
        </>
        :
        <p>No FeedBack Given</p>
        
      }

    </div>
  )
}


export default App;