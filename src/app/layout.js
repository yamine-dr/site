import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";

const SpaceGrotesk = Space_Grotesk({
  weight: "400",
});

export const metadata = {
  title: "Yamine Daroueche",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${SpaceGrotesk.className} antialiased`}
      >
        <Header/>

        {children}
      </body>
    </html>
  );
}
