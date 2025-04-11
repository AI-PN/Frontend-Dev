
// app/layout.js 
// These styles apply to every route in the application
import './globals.css'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "HealthCare AI",
  description: "Your Health, Your Control",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
