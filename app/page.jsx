import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next.js Tutorial</h1>
      <Link href="/about/info" className="btn btn-accent">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
