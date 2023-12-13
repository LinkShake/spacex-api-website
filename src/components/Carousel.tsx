"use client";

import { useEffect, useState } from "react";

export const Carousel = ({ imgs }: { imgs: string[] }) => {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg(
        activeImg >= 0 && activeImg < imgs.length - 1 ? activeImg + 1 : 0
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="carousel">
      {imgs.map((src, idx) => {
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={idx}
            src={src}
            alt="Rocket img"
            style={{
              transform: `translateX(${100 * (idx - activeImg)}%)`,
            }}
          />
        );
      })}
    </div>
  );
};
