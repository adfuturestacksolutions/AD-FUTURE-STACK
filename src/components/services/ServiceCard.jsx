import React from "react";

const ServiceVisual = ({ type }) => {
  if (type === "web") {
    return (
      <div className="service-visual web-visual">
        <div className="browser-window">
          <div className="browser-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="browser-content">
            <div className="browser-sidebar"></div>

            <div className="browser-main">
              <div className="browser-title"></div>

              <div className="browser-cards">
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className="browser-chart">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="visual-badge">WEB</div>
      </div>
    );
  }

  if (type === "app") {
    return (
      <div className="service-visual app-visual">
        <div className="phone-device">
          <div className="phone-notch"></div>

          <div className="phone-screen">
            <div className="phone-header"></div>

            <div className="phone-card-large"></div>

            <div className="phone-small-cards">
              <span></span>
              <span></span>
            </div>

            <div className="phone-bottom-nav">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>

        <div className="app-floating-dot"></div>
        <div className="app-floating-line"></div>
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className="service-visual ai-visual">
        <div className="ai-core">
          <div className="ai-core-inner">
            AI
          </div>
        </div>

        <div className="ai-node node-one">
          API
        </div>

        <div className="ai-node node-two">
          CRM
        </div>

        <div className="ai-node node-three">
          DATA
        </div>

        <div className="ai-node node-four">
          n8n
        </div>

        <div className="ai-connection connection-one"></div>
        <div className="ai-connection connection-two"></div>
        <div className="ai-connection connection-three"></div>
        <div className="ai-connection connection-four"></div>
      </div>
    );
  }

  if (type === "marketing") {
    return (
      <div className="service-visual marketing-visual">
        <div className="marketing-dashboard">
          <div className="marketing-sidebar">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="marketing-content">
            <div className="marketing-top">
              <div></div>
              <div></div>
            </div>

            <div className="marketing-chart">
              <div className="bar bar-one"></div>
              <div className="bar bar-two"></div>
              <div className="bar bar-three"></div>
              <div className="bar bar-four"></div>
              <div className="bar bar-five"></div>
            </div>

            <div className="marketing-footer">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="service-visual saas-visual">
      <div className="saas-dashboard">
        <div className="saas-sidebar">
          <div></div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="saas-main">
          <div className="saas-top">
            <div></div>
            <div></div>
          </div>

          <div className="saas-metrics">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="saas-chart">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>

      <div className="tenant tenant-one">A</div>
      <div className="tenant tenant-two">B</div>
      <div className="tenant tenant-three">C</div>
    </div>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <article
      className={`service-card ${
        service.featured ? "service-card-featured" : ""
      }`}
    >
      <div className="service-card-number">
        {service.number}
      </div>

      <div className="service-card-content">
        <span className="service-card-label">
          DIGITAL ENGINEERING
        </span>

        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <div className="service-tech-list">
          {service.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <a
          href={`/services/${service.title
            .toLowerCase()
            .replace(/&/g, "and")
            .replace(/\s+/g, "-")}`}
          className="service-explore"
        >
          <span>Explore Service</span>
          <strong>→</strong>
        </a>
      </div>

      <ServiceVisual type={service.type} />
    </article>
  );
};

export default ServiceCard;