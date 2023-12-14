import React from "react";

const ProgressDot = ({ isActive }) => (
  <span className={`dot ${isActive ? "active" : ""}`}>●</span>
);

const CustomPagination = ({ slidesLength, activeSlideIndex }) => {
  const dots = Array.from({ length: slidesLength }, (_, i) => (
    <ProgressDot key={i} isActive={i === activeSlideIndex} />
  ));

  return <div className="custom-pagination">{dots}</div>;
};

export default CustomPagination;
