"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavAction({ href, route }) {
  const pathname = usePathname();

  let isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`w-16 h-16 rounded-full flex items-center justify-center ${
        isActive ? "bg-tertiary" : ""
      }`}
    >
      <Icon type={href} />
    </Link>
  );
}

function Icon({ type }) {
  switch (type) {
    case "/home":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path fill="#ffffff" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z" />
        </svg>
      );
    case "/home/user":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 256 256"
        >
          <path
            fill="#ffffff"
            d="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8Z"
          />
        </svg>
      );

    default:
      return null;
  }
}
