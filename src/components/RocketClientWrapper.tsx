/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import { RocketCarousel } from "./RocketCarousel";

interface RocketClientWrapperProps {
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
  diameter: {
    meters: number;
    feet: number;
  };
  engines: {
    engine_loss_max: number;
    isp: {
      sea_level: number;
      vacuum: number;
    };
    layout: string;
    number: number;
    propellant_1: string;
    propellant_2: string;
    type: string;
    version: string;
  };
  first_flight: string;
  flickr_images: string[];
  height: {
    meters: number;
    feet: number;
  };
  id: string;
  landing_legs: {
    number: number;
    material?: number;
  };
  mass: {
    kg: number;
    lb: number;
  };
  name: string;
  type: string;
  imgIdx: number;
}

export const RocketClientWrapper: React.FC<RocketClientWrapperProps> = (
  rocketData
) => {
  let lastScrollTop = useRef(0);

  const calculateVideoRef = () => {
    switch (rocketData.name) {
      case "Falcon 9":
        return "https://www.youtube.com/embed/Z4TXCZG_NEY?si=R81PxwRY-pRR-i9j";
      case "Falcon 1":
        return "https://www.youtube.com/embed/mq2hymWPN1I?si=qwEJkuUG_r_qyoK_";
      case "Falcon Heavy":
        return "https://www.youtube.com/embed/A0FZIwabctw?si=oiS0-0bupvVyDHGT";
      case "Starship":
        return "https://www.youtube.com/embed/C3iHAgwIYtI?si=MYJDGU3SBenR4VkN";
      default:
        return "";
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.42,
    };

    const cb = (entries: any, _: any) => {
      const [entry] = entries;
      entry.target.style.opacity = `${entry.isIntersecting ? 1 : 0}`;
      entry.target.style.filter = `blur(${entry.isIntersecting ? 0 : 50}px)`;
    };

    const observer = new IntersectionObserver(cb, options);
    const windowCb = () => {
      divs.forEach((el) => observer.observe(el as Element));
    };

    const divs = [
      document.querySelector(".description"),
      document.querySelector(".data"),
    ];

    ["load", "scroll"].forEach((e) => {
      window.addEventListener(e, windowCb);
    });

    return () => {
      ["load", "scroll"].forEach((e) => {
        window.removeEventListener(e, windowCb);
      });
    };
  }, []);

  return (
    <div className="rocket-data-container">
      <div className="description" id="description">
        <div>
          <h3>{rocketData.description}</h3>
        </div>
        <iframe
          src={calculateVideoRef()}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="data" id="data">
        <RocketCarousel imgs={rocketData.flickr_images} />
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{rocketData.name}</td>
            </tr>
            <tr>
              <td>Mass</td>
              <td>{rocketData.mass.kg}kg</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{rocketData.height.meters}m</td>
            </tr>
            <tr>
              <td>Diameter</td>
              <td>{rocketData.diameter.meters}m</td>
            </tr>
            <tr>
              <td>Landing legs</td>
              <td>{rocketData.landing_legs.number}</td>
            </tr>
            <tr>
              <td>Engine</td>
              <td>{rocketData.engines.type}</td>
            </tr>
            <tr>
              <td>Boosters</td>
              <td>{rocketData.boosters}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{rocketData.country}</td>
            </tr>
            <tr>
              <td>Cost/launch</td>
              <td>${rocketData.cost_per_launch}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
