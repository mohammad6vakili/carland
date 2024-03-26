import React from "react";
import Skeleton from "react-loading-skeleton";

const MySkeleton = ({ width, height, borderRadius, count, style }) => {
  return (
    <section style={{ width: "100%" }}>
      <Skeleton
        borderRadius={borderRadius ? borderRadius : "10px"}
        count={count ? count : 1}
        style={style}
        className="flex-1"
        width={width}
        height={height}
      />
    </section>
  );
};

export default MySkeleton;
