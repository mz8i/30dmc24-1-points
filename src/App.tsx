function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <div className="h-20 w-20 bg-[#f0b84f] rounded-3xl rounded-tr-md"></div>
      <div className="h-40 w-40 bg-[#e75757] rounded-xl rounded-tr-2xl rounded-tl-md rounded-br-3xl text-[#f0f0f0] flex flex-col justify-center">
        <div className="text-center font-manrope font-light">Hi there!</div>
      </div>
      <div className="h-10 w-10 bg-[#5959ff] rounded-tr-2xl rounded-tl-md rounded-bl-xl"></div>
    </div>
  );
}

export default App;
