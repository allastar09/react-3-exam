import React from 'react'
import { useState } from "react";

const Home = () => {
   const [dark, setDark] = useState(false);

  return (
    <div
      className={
        dark
          ? "min-h-screen bg-gray-900 text-white p-8"
          : "min-h-screen bg-white text-black p-8"
      }
    >
      <h1 className="text-3xl font-bold">
        Мой сайт
      </h1>

      <p className="mt-4">
        Изучаем Tailwind Dark Mode
      </p>

      <button
        onClick={() => setDark(!dark)}
        className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        Сменить тему
      </button>
    </div>
  );
}

export default Home
