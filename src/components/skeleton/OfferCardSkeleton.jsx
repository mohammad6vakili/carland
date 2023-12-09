import Skeleton from "react-loading-skeleton";

const OfferCardSkeleton = ({ width, height, borderRadius }) => {
  return (
    <>
      <Skeleton
        borderRadius={borderRadius ? borderRadius : "10px"}
        style={{ margin: "10px" }}
        className="flex-1"
        width={width}
        height={height}
      />
    </>
  );
};

export default OfferCardSkeleton;
