import { clsx } from "clsx";
import type { Metadata } from "next";
import Link from "next/link";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const NotFound: FC = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-display text-dark-purple dt:text-display-dt">
        404 Not Found
      </h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link
        className={clsx(
          "text-title text-dark-purple transition-colors dt:text-title-dt",
          "-m-1 rounded-md p-1 hover:text-pink",
        )}
        href="/"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
