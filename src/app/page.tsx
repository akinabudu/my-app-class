"use client";
import React from "react";

export default function Home() {
  const [count, setCount] = React.useState<number>(0);

  function handleClick() {
    if (count < 10) {
      setCount(count + 1);
    }
  }
  function handleDecrease() {
    if (count > -10) {
      setCount(count - 1);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen text-5xl font-bold gap-10 ">
      <div className="">{count}</div>
      <button
        onClick={handleClick}
        type="button"
        className="border-2  border-black p-5 rounded-lg"
      >
        +
      </button>
      <button
        onClick={handleDecrease}
        type="button"
        className="border-2  border-black p-5 rounded-lg"
      >
        -
      </button>
    </div>
  );
}
