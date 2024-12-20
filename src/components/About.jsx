import React from "react";

const About = ({ about }) => {
  return (
    <section className="about" ref={about}>
      <h2>
        About <span className="acssan"> ACSSAN</span>
      </h2>
      <p className="about-acssan">
        ACSSAN is a network of organizations, social enterprises, and
        individuals passionate about taking sustainable actions, and working to
        combat climate change. We foster collective action and advocate for
        policies promoting climate change mitigation and sustainable agriculture
      </p>
      {/* <ul>
        <li>Knowledge sharing, research, and policy</li>
        <li>Networking and collaboration</li>
        <li>Programs, projects, and events</li>
        <li>Resource mobilization and distribution</li>
      </ul> */}
    </section>
  );
};

export default About;
