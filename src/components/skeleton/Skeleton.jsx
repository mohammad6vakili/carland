import React from "react";
import Skeleton from "react-loading-skeleton";

const MySkeleton = ({ width, height, borderRadius, count }) => {
  return (
    <React.Fragment style={{ width: "100%" }}>
      <Skeleton
        borderRadius={borderRadius ? borderRadius : "10px"}
        count={count ? count : 1}
        className="flex-1"
        width={width}
        height={height}
      />
    </React.Fragment>
  );
};

export default MySkeleton;
