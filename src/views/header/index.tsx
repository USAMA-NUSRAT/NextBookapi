import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-center  h-24 text-3xl border-2 w-full">
      <Link
        className="bg-indigo-500 border-2 p-2 mx-3 rounded-lg text-gray-50"
        href="/"
      >
        Home
      </Link>
      <Link
        className="bg-indigo-500 border-2 p-2 mx-3 rounded-lg text-gray-50"
        href="/books"
        replace
      >
        Books
      </Link>
    </div>
  );
};
export default Header;
