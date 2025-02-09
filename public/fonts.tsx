import { Manrope, Urbanist, Orbit } from "next/font/google";

export const Manrope_Font = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const Urbanist_Font = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const Orbit_Font = Orbit({
  weight: "400",
  variable: "--font-orbit",
  subsets: ["latin"],
});

const Fonts = { Manrope_Font, Urbanist_Font };
export default Fonts;
