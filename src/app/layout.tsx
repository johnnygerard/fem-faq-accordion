import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "FAQ accordion | Frontend Mentor",
  description: "Frontend Mentor FAQ accordion challenge",
  icons: [
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: "/images/favicon-32x32.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} bg-light-pink font-sans text-body antialiased dt:text-body-dt`}
      >
        {children}
      </body>
    </html>
  );
}
