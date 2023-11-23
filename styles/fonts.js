import { Inter } from "next/font/google";
import localFont from "next/font/local";

// define your variable fonts
const inter = Inter();
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const dana = localFont({ src: ".././public/fonts/Dana-Medium.ttf" });

export { inter, dana };
