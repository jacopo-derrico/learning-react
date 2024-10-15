import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <Card icon={<Icon icon='B'/>}>
        <p>
          A text
        </p>
      </Card>
    </div>
  );
}

export default App;
