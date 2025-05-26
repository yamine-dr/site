import { Orbit } from "next/font/google";
import "./globals.css";

const orbit = Orbit({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Yamine Daroueche",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${orbit.className} antialiased`}
      > 
        {children}
      </body>
    </html>
  );
}
