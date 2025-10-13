import React from "react";
import './App.css';

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="" alt="Logo" />
        </div>
        <nav className="menu_main">
          <ul>
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Banner */}
      <section className="banner_section layout_padding">
        <h1 className="banner_taital">Adventure</h1>
        <p className="banner_text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
          quaerat?
        </p>
        <div className="read_bt">
          <a href="#quote">Get A Quote</a>
        </div>
      </section>

      {/* Services */}
      <section className="services_section layout_padding" id="services">
        <h1 className="services_taital">Services</h1>
        <p className="services_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="services_section_2">
          <div className="services_row">
            <div className="services_col">
              <img src="/images/img-1.png" alt="Rafting" className="services_img" />
              <div className="btn_main">
                <a href="#">Rafting</a>
              </div>
            </div>
            <div className="services_col">
              <img src="/images/img-2.png" alt="Hiking" className="services_img" />
              <div className="btn_main">
                <a href="#">Hiking</a>
              </div>
            </div>
            <div className="services_col">
              <img src="/images/img-3.png" alt="Camping" className="services_img" />
              <div className="btn_main">
                <a href="#">Camping</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about_section layout_padding" id="about">
        <h1 className="about_taital">About Us</h1>
        <p className="about_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quaerat,corrupti.
        </p>
        <div className="readmore_bt">
          <a href="#">Read More</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer_section layout_padding">
        <p className="copyright_text">
          © 2025 All Rights Reserved. Design by{" "}
          <a href="https://html.design">Free HTML Templates</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
