"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Landing() {
  return (
    <>
      <div className="bg-image"></div>
      <div className="intro-page">
        <h1>
          <i>SpaceX</i>
        </h1>
        <h2>{"We're"} born on Earth...why not dying on Mars?</h2>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: "5px",
          boxSizing: "border-box",
        }}
      >
        <Link
          href={"/rockets"}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <h3>Explore</h3>
        </Link>
      </div>
    </>
  );
}
