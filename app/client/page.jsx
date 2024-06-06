"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  console.log("client component log");
  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button
        className="btn  btn-primary mr-4"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <button
        className="btn  btn-primary ml-4"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
    </div>
  );
};

export default ClientPage;
