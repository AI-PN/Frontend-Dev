
// app/layout.js 
// These styles apply to every route in the application
import './globals.css'
export const metadata = {
  title: "HealthCare AI",
  description: "Your Health, Your Control",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Global Layout - could add a Navbar here if you want */}
        {children}
      </body>
    </html>
  );
}
