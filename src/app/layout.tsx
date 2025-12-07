import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import type { FC, ReactNode } from "react";
import "./globals.css";

const workSans = Work_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const APP_NAME = "Frontend Mentor";
const TITLE = "FAQ accordion";
const DESCRIPTION = "Frontend Mentor FAQ accordion challenge";

export const metadata: Metadata = {
  metadataBase: new URL("https://fem-faq-accordion-jgerard.vercel.app"),
  title: {
    template: `%s | ${APP_NAME}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html
      className={workSans.variable}
      data-scroll-behavior="smooth"
      lang="en-US"
    >
      <body className="bg-light-pink font-sans text-body dt:text-body-dt">
        {/* Background pattern */}
        <div className="absolute -z-10 h-58 w-full bg-mobile-pattern bg-cover bg-no-repeat dt:h-80 dt:bg-desktop-pattern" />
        {/* Center page content */}
        <div
          role="main"
          className="grid min-h-screen place-items-center px-6 py-8 dt:py-12"
        >
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
