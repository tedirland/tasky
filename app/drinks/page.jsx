import React from "react";
import Link from "next/link";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const DrinksPage = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return (
    <div>
      <h1 className="text-7xl">Drinks Page</h1>
    </div>
  );
};

export default DrinksPage;
