import React, { Component } from "react";
import {
  FaCocktail,
  FaHiking,
  FaShuttleVan,
  FaBeer,
  FaSchool,
  FaRoad,
  FaParking,
  FaShower,
  FaShoppingCart,
  FaToolbox,
  FaTools,
  FaEarlybirds,
  FaClosedCaptioning,
  FaChevronCircleDown,
} from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaSchool />,
        title: "School District",
        info: "Monroe Township School District",
      },
      {
        icon: <FaChevronCircleDown />,
        title: "Amenities",
        info:
          "Water, Electricity, Wifi, Attached bath, Refrigerator, Washer, Dryer, Microwave, Car park, Garbage Disposal.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Turnpike, Bus & Train",
        info:
          "2 mi from NJTP & Route 130. 15 mins to Princeton JCT train station. Bus stop to New York, just outside this community!",
      },
      {
        icon: <FaShoppingCart />,
        title: "Shops, Restaurants & Malls",
        info: "Very close to plenty of shops, restaurants & malls",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Features" />
        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
