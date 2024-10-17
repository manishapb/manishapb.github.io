import { useState } from "react";
import "./App.css";

function App() {

  const langs = ["Python", "ReactJS", "Clojure"];
  const linkIcon = [{
    "name": "Github",
    "link": "https://github.com/manishapb/",
    "icon": "github.svg"
  },
  {
    "name": "Linkedin",
    "link": "https://www.linkedin.com/in/manisha-pillai",
    "icon": "linkedin.svg"
  },
  {
    "name": "CV",
    "link": "Manisha Pillai - Resume.pdf",
    "icon": "file-pdf.svg"
  },
  {
    "name": "mail",
    "link": "mailto:pillaimanisha77@gmail.com",
    "icon": "envelope.svg"
  }
  ];
  const links = linkIcon.map((i) => <a class="level-item pr-1" href={i.link}>
    <img src={i.icon} className="img-icon" alt={i.name}></img></a>)
  return (
    <>
      <div className="App has-background-black-ter">
        <section class="hero has-text-light">
          <div class="hero-body">
            <p class="title">Manisha Pillai</p>
            <p class="subtitle">Software Engineer</p>
          </div>
        </section>

        <div className="block ">
          <header className="App-header">
          </header>
        </div>
        {/* <div class="media-left">
          <figure class="image is-128x128">
            <img src="profilepic.png" alt="Image" />
          </figure>
        </div> */}
        <div className="media-content">
          <div className="content">
            <p>
              <br></br>
              Welcome to my webpage!
              <br></br>
              I am Software Engineer. Exploring the world and life as a digital nomad.
            </p>
            <nav className="level is-mobile mx-6">
              {links}
            </nav>
            <p>
              { }
            </p>
          </div>
        </div>

        <div className="container fs-5">
          <br></br>
          <p>Languages I"ve been working with: 
            <p></p>{(langs).join(", ")}</p>
          <div className="container">
            <br></br>
            <p>I have previously worked at 
              <a href="https://www.gobolt.in/" className="text-muted ms-1"> GoBOLT</a> and 
              <a href="https://www.knowlarity.com/" className="text-muted ms-1"> Knowlarity</a> and 
              <a href="https://www.graas.ai/" className="text-muted ms-1"> Shoptimize</a></p>
            <p>I have Master's in Computer Application from
              <p></p>University of Pune which
              I wrapped up with a couple of
              internships at <a href="https://www.globant.com/" className="text-muted ms-1">Globant</a> and
              <a href="https://www.helpshift.com/" className="text-muted ms-1">Helpshift</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
