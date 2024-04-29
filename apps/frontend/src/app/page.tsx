"use client";
export default function Home() {
  return (
    <>
      <button
        onClick={() => {
          fetch("/backend")
            .then((response) => response.text())
            .then((data) => console.log(data));
        }}
      >
        Fetch
      </button>
    </>
  );
}
