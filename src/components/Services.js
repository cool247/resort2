import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Servies extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Coktails",
        info: "Invidunt ipsum tempor sit consetetur et stet. Dolore sit erat."
      },
      {
        icon: <FaHiking />,
        title: "Free Hiking",
        info: "Himnot he relief for gathered of drugged ee, womans fly."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle Van",
        info:
          "Alle la nostri porgiamo e forse maravigliose prestasse con nostri, tutte santo.."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Ahol ér viselők öszetörjetek elvonta s, alatt kellene."
      }
    ]
  };
  renderServiceList() {
    return this.state.services.map((service, idx) => {
      return (
        <article key={idx} className="service">
          <span>{service.icon}</span>
          <h6>{service.title}</h6>
          <p>{service.info}</p>
        </article>
      );
    });
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">{this.renderServiceList()}</div>
      </section>
    );
  }
}
