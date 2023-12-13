import { Carousel } from "./Carousel";

/* eslint-disable @next/next/no-img-element */
interface RocketCardProps {
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

export const RocketCard: React.FC<RocketCardProps> = (rocketData) => {
  console.log(rocketData);
  return (
    <div className="rocketcard">
      {/* <img src={rocketData.flickr_images[0]} alt="" /> */}
      <Carousel imgs={rocketData.flickr_images} />
      <div className="rocketcard-content">
        <h2>{rocketData.name}</h2>
        <p>{rocketData.description}</p>
      </div>
    </div>
  );
};
