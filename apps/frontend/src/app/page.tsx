"use client";

import { BASE_URL } from "@/constants/constants";

export default function Home() {
  return (
    <>
      <button
        onClick={() => {
          fetch(`${BASE_URL}/competitor`)
            .then((response) => response.text())
            .then((data) => console.log(data));
        }}
      >
        Fetch
      </button>
    </>
  );
}
