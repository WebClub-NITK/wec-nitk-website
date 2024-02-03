'use client'
export default function Home() {
  //make a repeating grid of squares for the background
  const squares = [];

  //decide how many squares to make based on the screen size
  const count = Math.ceil((window.innerWidth * window.innerHeight) / 1000);

  for (let i = 0; i < count; i++) {
    squares.push(
      <div key={i} className=" bg-gray-950 h-16 w-16 m-[0.5px]" />
    );
  }

  return (
    <div className="flex w-screen h-screen flex-wrap bg-gray-800">
      <div
       
        className="w-32 h-32 blur-3xl bg-slate-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      {squares}
    </div>
  );
}
