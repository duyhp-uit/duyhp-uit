const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 px-16 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-white text-6xl font-thin tracking-light lg:mt-16 lg:text08xl">
              Dylan Huynh
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl trcking-tight text-transparent">
              Software Engineer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
