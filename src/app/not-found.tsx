import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-display text-dark-purple dt:text-display-dt">
        404 Not Found
      </h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link
        className="text-title text-dark-purple transition-colors hover:text-pink dt:text-title-dt"
        href="/"
      >
        Back to Home
      </Link>
    </div>
  );
}
