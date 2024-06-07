import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/styles/main.module.scss";
import { setMedia } from "@/src/app/slices/media";
import { FaTimesCircle } from "react-icons/fa";

export default function ShowMedia() {
  const media = useSelector((state) => state.media.media);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={styles.media_container}
        style={media ? { display: "block" } : { display: "none" }}
      >
        <span className={styles.cross} onClick={() => dispatch(setMedia(null))}>
          <FaTimesCircle />
        </span>

        <div className={styles.image}>
          <Image
            className={styles.img}
            src={media ? media : ""}
            alt="media"
            width={500}
            height={300}
          />
        </div>
      </div>
    </>
  );
}
