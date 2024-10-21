import "./App.css";
import 'font-awesome/css/font-awesome.min.css';

function App() {

  const langs = ["Python", "ReactJS", "Clojure"];
  const linkIcons = [{
    "name": "Github",
    "link": "https://github.com/manishapb/",
    "icon": "fa fa-github"
  },
  {
    "name": "Linkedin",
    "link": "https://www.linkedin.com/in/manisha-pillai",
    "icon": "fa fa-linkedin"
  },
  {
    "name": "CV",
    "link": "Manisha Pillai - Resume.pdf",
    "icon": "fa fa-file"
  },
  {
    "name": "Mail",
    "link": "mailto:pillaimanisha77@gmail.com",
    "icon": "fa fa-envelope"
  }];

  const links = linkIcons.map((x) =>
    <a className="cell pl-6" href={x.link} key={x.name}>
      <span className="icon" title={x.name}>
        <i className={x.icon}></i>
      </span>
    </a>)

  return (
    <>
      <div className="App">
        <section className="hero has-text-light">
          <div className="hero-body">
            <p className="title">Manisha Pillai</p>
            <p className="subtitle">Software Engineer</p>
          </div>
        </section>

        <div className="media-content">
          <div className="content">
            <p>
              <br></br>
              Welcome to my webpage!
              <br></br>
              I am Software Engineer. Exploring the world and life as a digital nomad.
            </p>
            <div className="container">
              {links}
            </div>
          </div>
        </div>

        <div className="content">
          <br></br>
          <p>Languages I"ve been working with:
            <br></br>{(langs).join(", ")}
          </p>
          <div className="container">
            <br></br>
            <p>I have previously worked at
              <a href="https://www.gobolt.in/" className="text-muted ms-1"> GoBOLT</a> and
              <a href="https://www.knowlarity.com/" className="text-muted ms-1"> Knowlarity</a> and
            </p>
          </div>
        </div>

        <div className="container fs-5">
          <br></br>
          <p>Languages I"ve been working with:
            <br></br>{(langs).join(", ")}</p>
          <div className="container">
            <br></br>
            <p>I have previously worked at
              <a href="https://www.gobolt.in/" className="text-muted ms-1"> GoBOLT</a> and
              <a href="https://www.knowlarity.com/" className="text-muted ms-1"> Knowlarity</a> and
              <a href="https://www.graas.ai/" className="text-muted ms-1"> Shoptimize</a></p>
            <p>I have Master's in Computer Application from
              <br></br>University of Pune which
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
