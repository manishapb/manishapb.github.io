import './App.css';
import 'bootstrap/dist/css/bootstrap'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
          Manisha Pillai
          <img src='dharamshala2.png' className='rounded float-start'></img>
      </header>
      <div className='container'>
        <p>I am Software Engineer by profession and an artist at heart.</p>
        <p>Some languages I've loved and currently use are:</p>
        <ul>
          <li>Python</li>
          <li>ReactJS</li>
          <li>Clojure</li>
          <li>Typescript</li>
          </ul>
        <p>Previously worked in : Php, JS, NodeJS</p>
        <div className='container'>
          <p>I'm currently looking for some interesting work. I have previously at 
            <a href='https://www.gobolt.in/'>GoBOLT</a> and 
            <a href='https://www.knowlarity.com/'></a>Knowlarity</p>
          <p>I have Master's in Computer Application from University of Pune which I wrapped up with a couple of
            internships at <a href='https://www.globant.com/'></a>Globant and 
            <a href='https://www.helpshift.com/'></a>Helpshift</p>
        </div>
      </div>
      <footer>
      <p class='love'>Made with <i class="bi bi-heart"></i> in React</p>
      </footer>
    </div>
  );
}

export default App;
