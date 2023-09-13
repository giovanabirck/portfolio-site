import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

// import App from "./App";

function App() {
  return (
    <div>
      <Avatar
        image="https://randomuser.me/api/portraits/women/23.jpg"
        name="Jane Dreams"
        tagLine="I design and build awesome web applications"
      />
      <Avatar
        image="https://randomuser.me/api/portraits/men/75.jpg"
        name="Jack Dreams"
        tagLine="I am awesome"
      />
      <WorkExperience id="1" profile="Jack Dreams">
        <Company name="Microsoft" from_date="Jan 2019" to_date="Dec 2020" />
        <Company name="Netflix" from_date="Jan 2021" to_date="May 2022" />
        <Company name="Google" from_date="Jun 2021" to_date="Present" />
      </WorkExperience>
      <Portfolio>
        <Project image="https://picsum.photos/id/20/200/300" />
        <Project image="https://picsum.photos/id/37/200/300" />
        <Project image="https://picsum.photos/id/60/200/300" />
        <Project />
      </Portfolio>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="profile-container">
      <div className="profile-img">
        <img src={props.image} alt="" />
      </div>
      <div>
        <p className="profile">Hello, I'm {props.name}</p>
        <p className="profile-tagline">{props.tagLine}</p>
      </div>
    </div>
  );
}

function WorkExperience(props) {
  return (
    <div>
      <h2>Work Experience</h2>
      <ul className="work">{props.children}</ul>
    </div>
  );
}

function Company(props) {
  return (
    <li>
      <h2 className="work-title">
        <span className="company">{props.name}</span>
        <span className="from">{props.from_date}</span>
        <span className="to">{props.to_date}</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </li>
  );
}

function Portfolio(props) {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio">{props.children}</div>
    </div>
  );
}

function Project(props) {
  let image;

  if (!props.image) {
    image = "https://placehold.co/600x400?text=Hello+World";
  } else {
    image = props.image;
  }

  return (
    <div className="project">
      <div className="project-image">
        <img src={image} alt="" />
      </div>
      <div className="project-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
