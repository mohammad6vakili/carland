import toast from "react-hot-toast";

export const toPersianString = (str) => {
  if (typeof str === "string") {
    return str
      .replace(/1/g, "۱")
      .replace(/2/g, "۲")
      .replace(/3/g, "۳")
      .replace(/4/g, "۴")
      .replace(/5/g, "۵")
      .replace(/6/g, "۶")
      .replace(/7/g, "۷")
      .replace(/8/g, "۸")
      .replace(/9/g, "۹")
      .replace(/0/g, "۰");
  } else {
    return str
      ?.toString()
      .replace(/1/g, "۱")
      .toString()
      .replace(/2/g, "۲")
      .toString()
      .replace(/3/g, "۳")
      .toString()
      .replace(/4/g, "۴")
      .toString()
      .replace(/5/g, "۵")
      .toString()
      .replace(/6/g, "۶")
      .toString()
      .replace(/7/g, "۷")
      .toString()
      .replace(/8/g, "۸")
      .toString()
      .replace(/9/g, "۹")
      .toString()
      .replace(/0/g, "۰");
  }
};

export function convertTime(timeStr) {
  // Split the time string into hours, minutes, and seconds
  const [hours, minutes, seconds] = timeStr.split(":");

  // Check if minutes and seconds are 00
  if (minutes === "00" && seconds === "00") {
    // Return only the hours
    return hours;
  } else {
    // Return hours and minutes separated by a decimal point
    return `${hours}.${minutes}`;
  }
}

export const handleCopy = (value, { toastText }) => {
  navigator.clipboard
    .writeText(value)
    .then(() => {
      toastText ? toast.success(toast) : toast.success("متن با موفقیت کپی شد");
    })
    .catch((error) => toast.success("مشکلی در کپی متن بوجود امد"));
};

export const setLocal = (key, value) => {
  return typeof window !== "undefined"
    ? localStorage.setItem(key, value)
    : undefined;
};

export const getLocal = (key) => {
  return typeof window !== "undefined"
    ? JSON.stringify(localStorage.getItem(key))?.replaceAll('"', "")
    : null;
};

export const removeLocal = (key) => {
  return typeof window !== "undefined"
    ? JSON.stringify(localStorage.removeItem(key))
    : undefined;
};

export const formatStringJSON = (str) => {
  if (str.length !== 0) {
    return str.replace(/\\/g, '"');
  } else {
    return "[]";
  }
};
