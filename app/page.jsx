import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-7xl">Homepage</h1>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <Link href="/client">Client</Link>
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          <Link href="/drinks">Drinks</Link>
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          <Link href="/prisma-example">Prisma</Link>
        </li>
        <li className="w-full px-4 py-2 rounded-b-lg">
          <Link href="/query">Query</Link>
        </li>
        <li className="w-full px-4 py-2 rounded-b-lg">
          <Link href="/tasks">Tasks</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
