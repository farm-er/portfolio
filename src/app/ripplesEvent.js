"use client";

import React from "react";

export default function RipplesEvent({ children }) {
  const handleMouseDown = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    const ripples = document.createElement("span");
    ripples.classList.add("ripples");

    ripples.style.left = `${e.clientX}px`;
    ripples.style.top = `${e.clientY}px`;

    e.currentTarget.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  };

  return (
    <div className="ripplesEvent" onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
}
