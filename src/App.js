import logo from './logo.svg';
import './App.css';

function App() {



  const title = "welcome to dojo-blog";
  const likes = "50"; //what ever the data recat gonna convert 
  // it to string while displaying to browser
  // we cannot display "object" and "boolean" data on to browser
  return (
    <div className="App">
       <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <h2>{10}</h2> {/* we can add dynamic content directly in {}*/}
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 20}</p>
       </div>
    </div>
  );
}

export default App;
