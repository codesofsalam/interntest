const HeroSection = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/container.png')`,
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-[1400px] mx-auto px-4 lg:px-12 py-8 lg:py-32 flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
        {/* Left Content Box */}
        <div className="bg-white p-6 lg:p-20 max-w-full lg:max-w-[520px] flex-grow flex items-center w-full lg:w-auto">
          <div className="w-full">
            <h2 className="text-[#00A0E3] text-xl lg:text-2xl font-normal mb-4 lg:-ml-10">
              Assarain Food Products L.L.C.
            </h2>
            <h1 className="text-[#002652] text-2xl lg:text-3xl font-bold leading-tight mb-6 lg:mb-8 lg:-ml-10">
              Oman Best Food Distributor Natural, Organic, Specialty, And Fresh.
            </h1>
            <button className="bg-[#002652] text-white px-6 lg:px-8 py-3 font-medium w-full lg:w-auto lg:-ml-10">
              REQUEST A QUOTE
            </button>
          </div>
        </div>

        {/* Right Video Box */}
        <div className="relative w-full lg:w-60 h-[300px] lg:h-[400px] bg-[#51BAE2]/50 text-white overflow-hidden shadow-lg">
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center p-6 h-full justify-between">
            {/* Play Icon & Package Logo */}
            <div className="flex flex-col items-center gap-4 mt-6 lg:mt-10">
              <div className="relative">
                <img src="playbutton.png" alt="" className="w-16 lg:w-auto" />
                <img
  src="/pause-icon.png"
  alt="Overlay"
  className="absolute top-6 left-6 sm:top-12 sm:left-12 transform -translate-x-1/2 -translate-y-1/2 w-6 lg:w-auto"
/>


              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <h2 className="text-sm lg:text-base">
                Video of a Warehouse <br /> How Our Distribution Process
                Works...
              </h2>
              <button className="text-[#003B6D] font-bold border-b-2 border-[#FFFFFF] pb-1">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;