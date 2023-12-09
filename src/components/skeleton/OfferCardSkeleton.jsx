import Skeleton from "react-loading-skeleton";

const OfferCardSkeleton = ({ width, height, borderRadius }) => {
  return (
    <div style={{ width: "100%" }}>
      <Skeleton
        borderRadius={borderRadius ? borderRadius : "10px"}
        style={{ margin: "10px" }}
        className="flex-1"
        width={width}
        height={height}
      />
    </div>
  );
};

export default OfferCardSkeleton;
