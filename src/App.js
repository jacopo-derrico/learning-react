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

 const data = [
  { id: 1, name: 'Fido 🐕' },
  { id: 2, name: 'Snowball 🐈' },
  { id: 3, name: 'Murph 🐈‍⬛' },
  { id: 4, name: 'Zelda 🐈' },
 ]

 function ListOfAnimals() {
  return (
    <ul>
      {data &&
        data.map(({id, name}) => {
          return <li key={id}>{name}</li>
        })
      }
    </ul>
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
      <ListOfAnimals/>
    </div>
  );
}

export default App;
