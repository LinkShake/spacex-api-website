"use client";

import { useState } from "react";

export const RocketCarousel = ({ imgs }: { imgs: string[] }) => {
  const [activeImg, setActiveImg] = useState(0);

  const changeActiveImg = (verse: "prev" | "next") => {
    setActiveImg(verse === "next" ? activeImg + 1 : activeImg - 1);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "50%",
        // border: "2px solid red",
      }}
      className="rocket-carousel-wrapper"
    >
      <div className="rocket-carousel">
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
        <button
          className="prev"
          onClick={() => changeActiveImg("prev")}
          disabled={activeImg === 0}
        >
          ❮
        </button>
        <button
          className="next"
          onClick={() => changeActiveImg("next")}
          disabled={activeImg === imgs.length - 1}
        >
          ❯
        </button>
      </div>
      <br />
      <div
        id="dots"
        style={{
          textAlign: "center",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          bottom: `-${document.getElementById("dots")?.style.height}`,
          width: "100%",
        }}
      >
        {imgs.map((_, idx) => {
          return (
            <span
              className={`dot ${activeImg === idx && "active"}`}
              key={idx}
              onClick={() => setActiveImg(idx)}
            ></span>
          );
        })}
      </div>
    </div>
  );
};
