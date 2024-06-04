import React from "react";
import "./App.css";

import logo from "./image/uifrylogo.png";
import watchlogo from "./image/watch_video.png";
import iphone13 from "./image/iPhone-13-Pro-Front.png";
import iphone13_2 from "./image/iPhone-13-Pro-Front (2).png";
import iphone13_3 from "./image/iPhone-13-Pro-Front (3).png";
import group_35924 from "./image/Group 35924.png";
import rounded from "./image/background_round1.png";
import redcolor from "./image/red_color.png";
import iPhone13 from "./image/iPhone-13-Pro-Front_container2.png";
import redcolor1 from "./image/redcoloricon.png";
const features = [
  {
    icon: "✨",
    title: "Budgeting Intervals",
    description:
      "Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.",
  },
  {
    icon: "🛡️",
    title: "Budgeting Intervals",
    description:
      "Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.",
  },
  {
    icon: "🧩",
    title: "Budgeting Intervals",
    description:
      "Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.",
  },
];

const App = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
            <h3>uifry</h3>
          </div>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Features</li>
          </ul>
          <button className="download-btn">Download</button>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Make The Best Financial Decisions</h1>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className="hero-buttons">
              <button className="get-started-btn">
                Get Started
                <i className="material-icons right-arrow">&rarr;</i>
              </button>
              <img src={watchlogo} alt="watchlogo" />
            </div>
          </div>
          <div className="phone-mockup">
            <img src={iphone13} alt="iPhone Mockup" />
            <img src={iphone13_2} alt="iphone mockup 2" />
            <img src={iphone13_3} alt="iPhone Mockup" />
            <img src={rounded} alt="rounded" />
            <img src={rounded} alt="rounded" />
            <img src={rounded} alt="rounded" />
            <img src={redcolor} alt="color" />
          </div>
          <img src={group_35924} alt="images" className="images" />
        </section>
        <section className="container2">
          <div className="left">
            <img src={iPhone13} alt="iPhone Mockup" />
            <img src={rounded} alt="rounded" />
            <img src={rounded} alt="rounded" />
            <img src={rounded} alt="rounded" />
            <img src={redcolor} alt="color" />
          </div>
          <div className="features-container">
            <h2 className="features-title">FEATURES</h2>
            <h1 className="premium-title">Uifry Premium</h1>
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-icon">{feature.icon}</span>
                <div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <img src={redcolor1} alt="redcolor" />
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
