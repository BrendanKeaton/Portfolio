import { Manrope, Urbanist } from "next/font/google";

export const Manrope_Font = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const Urbanist_Font = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const Fonts = { Manrope_Font, Urbanist_Font };
export default Fonts;
