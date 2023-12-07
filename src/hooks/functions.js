export function enToFaNum(n) {
  const farsiNum = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "."];

  if (n !== "" && n.includes(".")) {
    return n
      ?.toString()
      .split("")
      .map((x) => farsiNum[x])
      .join("")
      .replace(".", ".");
  } else {
    return n
      ?.toString()
      .split("")
      .map((x) => farsiNum[x])
      .join("");
  }
}

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
