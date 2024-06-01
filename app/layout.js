import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tasky",
  description: "The Ultimate Task Master",
};

export default function RootLayout({ children }) {
  return (
    // RootLayout must export html and body tags. Not necessary in nested layouts
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="px-8 py-20 max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
