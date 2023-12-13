import { RocketCard } from "@/components/RocketCard";
import Link from "next/link";

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

export default async function Home() {
  const res = await fetch("https://api.spacexdata.com/latest/rockets");
  const data = await res.json();

  return (
    <center>
      <div id="rockets-grid">
        {data.map((currData: RocketData) => {
          return (
            <Link
              key={currData.id}
              href={`/rocket/${currData.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <RocketCard {...currData} />
            </Link>
          );
        })}
      </div>
    </center>
  );
}
