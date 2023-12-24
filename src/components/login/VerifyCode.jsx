import Email from "./Email";
import styles from "./login.module.scss";
import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";

const VerifyCode = () => {
  return (
    <>
      <Email verify={true} />
    </>
  );
};

export default VerifyCode;
