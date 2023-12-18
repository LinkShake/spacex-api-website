import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpaceX Rockets",
  description:
    "A simple website about SpaceX Rockets data fetched via SpaceX API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="bg-image"></div> */}
        {children}
      </body>
    </html>
  );
}
