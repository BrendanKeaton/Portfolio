import Background from "./components/background";
import { Manrope_Font } from "../../public/fonts";
import { DockDemo } from "./components/dock";
import "./globals.css";

export const metadata = {
  title: "Brendan Keaton",
  description: "Fullstack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Manrope_Font.className} suppressHydrationWarning>
      <body className="relative">
        <Background />
        <DockDemo />
        <div className="text-brendan-black container px-4 2xl:px-0 mx-auto flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
