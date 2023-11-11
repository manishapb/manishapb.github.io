import { useState } from 'react';
import './App.css';
import './bootstrap.css'

function App() {

  const langs = ['Python', 'ReactJS', 'Clojure'];
  const linkIcon = [{
    'name': 'Github',
    'link': 'https://github.com/manishapb/',
    'icon': 'github.svg'
  },
  {
    'name': 'Linkedin',
    'link': 'https://www.linkedin.com/in/manisha-pillai',
    'icon': 'linkedin.svg'
  },
  {
    'name': 'CV',
    'link': 'Manisha Pillai - Resume.pdf',
    'icon': 'file-pdf.svg'
  },
  {
    'name': 'mail',
    'link': 'mailto:pillaimanisha77@gmail.com',
    'icon': 'envelope.svg'
  }
  ];
  const links = linkIcon.map((i) => <a href={i.link}>
    <img src={i.icon} className='img-icon' alt={i.name}></img></a>)
  return (
    <>
      <div className='App container-fluid text-dark'>
        <div className="container fs-5">
          <div className="row">
            <div className="col-9">
              <header className='App-header container fs-2'>
                Manisha Pillai
              </header>
            </div>
            <div className="col-4">
              <br></br>
              <img src='profilepic.png' className='rounded float-start profile-img'
                alt='profile pic'></img>
            </div>
            <div className="col-6">
              <br></br>Hello world!
              <div className='container'>
                <p>
                  <br></br>
                  Welcome to my webpage!
                  <br></br>
                  I am Software Engineer. Exploring the world and life as a digital nomad.
                </p>
                <div className='navbar ms-4 me-2'>
                  {links}
                </div>
                <p>
                  { }
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='container fs-5'>
          <br></br>
          <p>Languages I've been working with: 
            {(langs).join(', ')}</p>
          <div className='container'>
            <br></br>
            <p>I have previously worked at
              <a href='https://www.gobolt.in/' className='text-muted ms-1'>GoBOLT</a> and
              <a href='https://www.knowlarity.com/' className='text-muted ms-1'>Knowlarity</a> and
              <a href='https://www.graas.ai/' className='text-muted ms-1'>Shoptimize</a></p>
            <p>I have Master's in Computer Application from
              <p></p>University of Pune which
              I wrapped up with a couple of
              internships at <a href='https://www.globant.com/' className='text-muted ms-1'>Globant</a> and
              <a href='https://www.helpshift.com/' className='text-muted ms-1'>Helpshift</a></p>
          </div>
        </div>
        <footer>
          <br></br>
          <div className='fs-8 mt-6'></div>
          <p className='text-muted'>Made with <i className="bi bi-heart">
          <img src='heart.svg' className='img'></img>
          </i> in React</p>
        </footer>
      </div>
    </>
  );
}

export default App;
