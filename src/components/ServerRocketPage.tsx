"use client";

/* eslint-disable @next/next/no-img-element */
import { Carousel } from "./Carousel";

interface RocketData {
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
}

export const ServerRocketPage = async ({ id }: { id: string }) => {
  const res = await fetch(`https://api.spacexdata.com/latest/rockets/${id}`);
  const data = (await res.json()) as RocketData;

  const calculateImgSrcIdx = () => {
    switch (data.name) {
      case "Falcon 1":
        return 0;
      case "Falcon 9":
        return 5;
      case "Falcon Heavy":
        return 3;
      case "Starship":
        return 1;
      default:
        return 0;
    }
  };

  return (
    <div id="rocket-page-container">
      <div className="img-shadow">
        <h1
          style={{
            position: "absolute",
            color: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 101,
            margin: 0,
            padding: 0,
            fontSize: "4em",
            textShadow: "2px 2px black",
          }}
        >
          {data.name.toUpperCase()}
        </h1>
        <img
          src={data.flickr_images[calculateImgSrcIdx()]}
          alt={data.name}
          style={{
            width: "100%",
            height: "100vh",
            maxHeight: "100vh",
            // aspectRatio: "16 / 9",
            objectFit: "cover",
          }}
        />
      </div>
      <p>{data.description}</p>
    </div>
  );
};
