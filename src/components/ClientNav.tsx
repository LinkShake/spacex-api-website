"use client";

import { useEffect } from "react";

export const ClientNav = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", function (e) {
        e.preventDefault();

        // @ts-ignore
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });

  return (
    <nav
      id="rocket-page-nav"
      style={{
        opacity: ".75",
      }}
    >
      <a href="#top">Top</a>
      <a href="#description">Description</a>
      <a href="#data">Data</a>
    </nav>
  );
};
