import Skeleton from "react-loading-skeleton";

const MySkeleton = ({ width, height, borderRadius, count }) => {
  return (
    <div style={{ width: "100%" }}>
      <Skeleton
        borderRadius={borderRadius ? borderRadius : "10px"}
        count={count ? count : 1}
        className="flex-1"
        width={width}
        height={height}
      />
    </div>
  );
};

export default MySkeleton;
