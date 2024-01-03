import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Image from "next/image";
import styles from "../../../../../styles/main.module.scss";

const MapComponent = () => {
  const AnyReactComponent = () => (
    <div>
      <Image
        width={40}
        height={40}
        src={"/assets//main/car-1.png"}
        alt="کلینیک درمان ناخن بهار پودولوژی"
        loading="lazy"
      />
    </div>
  );

  return (
    <MapContainer
      className={styles.map}
      center={[35.7219, 51.3347]}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[1, 1]} children={AnyReactComponent} />
      {/* <AnyReactComponent /> */}
    </MapContainer>
  );
};
export default MapComponent;
