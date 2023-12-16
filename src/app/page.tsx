"use client";

import Link from "next/link";
import { useState } from "react";

export default function Landing() {
  return (
    <>
      <div className="landing-bg-image"></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          href={"/rockets"}
          style={{
            textDecoration: "none",
            color: "inherit",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "cursive",
            }}
          >
            <i>{"We've"} born on Earth...why not dying in Mars?</i>
          </h1>
        </Link>
      </div>
    </>
  );
}
