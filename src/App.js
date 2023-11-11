import { useState } from 'react';
import './App.css';
import './bootstrap.css'

function App() {

  const langs = ['Python', 'ReactJS', 'Clojure'];
  const linkIcon = [{
    'name': 'Github',
    'link': 'https://github.com/manishapb/',
    'icon': 'github.png'
  },
  {
    'name': 'Linkedin',
    'link': 'https://www.linkedin.com/in/manisha-pillai',
    'icon': 'linkedin.png'
  },
  {
    'name': 'CV',
    'link': 'Manisha Pillai - Resume.pdf',
    'icon': 'cv.jpeg'
  },
  {
    'name': 'mail',
    'link': 'pillaimanisha77@gmail.com',
    'icon': 'mail.png'
  }
];
  const links = linkIcon.map((i)=> <a href={i.link}>
                  <img src={i.icon} className='' alt={i.name}></img></a>)
  return (
    <>
      <div className='App container-fluid text-secondary'>
        <div className="container fs-5">
          <div className="row">
            <div className="col-9">
              <header className='App-header container fs-2'>
                Manisha Pillai
              </header>
            </div>
            <div className="col-4">
              <br></br>
              <img src='profilepic.png' className='rounded float-start'
                alt='profile pic'></img>
            </div>
            <div className="col-6">
              <br></br>Hello world!
              <div className='container'>
                <p>
                  <br></br>
                  Welcome to my webpage!
                  <br></br>
                  I am Software Engineer exploring the world and life as a digital nomad.
                </p>
                <div className='navbar'>
                  {links}
                </div>
                <p>
                  {}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='container fs-5'>
          <br></br>
          <p>Languages I've loved working with:
            {(langs).join(', ')}</p>
          <div className='container'>
            <br></br>
            <p>I have previously worked at
              <a href='https://www.gobolt.in/'>GoBOLT</a> and
              <a href='https://www.knowlarity.com/'>Knowlarity</a> and
              <a href='https://www.graas.ai/'>Shoptimize</a></p>
            <p>I have Master's in Computer Application from
              <p></p>University of Pune which
              I wrapped up with a couple of
              internships at <a href='https://www.globant.com/'>Globant</a> and
              <a href='https://www.helpshift.com/'>Helpshift</a></p>
          </div>
        </div>
        <footer>
          <br></br>
          <div className='fs-8 mt-6'></div>
          <p className=''>Made with <i className="bi bi-heart">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </i> in React</p>
        </footer>
      </div>
    </>
  );
}

export default App;
