import React, { useState } from 'react'
import './style.css'

 function Icon(props) {
    return <i>
      {props.icon}
    </i>
 }

 function Card(props) {
   return <section>
      <h3>
        {props.icon} is an icon!
      </h3>
      <p>
        {props.children}
      </p>
    </section>
 }

 function LoadingButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.loading ? <span className="loader"/> : props.label}
    </button>
  )
 }

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
      <Card icon={<Icon icon='B'/>}>
        <p>
          A text
        </p>
      </Card>
      <LoadingButton loading={isLoading}  onClick={() => setIsLoading(!isLoading)} label='Load'/>
    </div>
  );
}

export default App;
