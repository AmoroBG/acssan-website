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
        policies promoting climate change mitigation and sustainable
        agriculture. We engage, collaborate, empower, and advocate through:
      </p>
      <ul>
        <li>Community mobilization, engagement, and awareness</li>
        <li>Knowledge sharing, research, and policy</li>
        <li>Networking, coordination, and collaboration</li>
        <li>Programs, projects, and events</li>
        <li>Resource mobilization and distribution</li>
      </ul>
    </section>
  );
};

export default About;
