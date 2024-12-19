const NavigationHeader = () => {
    return (
      <header className="w-full">
        {/* Top bar with full-width border */}
        <div className="border-b bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-16">
            <div className="flex justify-between items-center p-2">
              {/* Logo */}
              <div className="flex items-center">
                <img src="/Logo.png" alt="Company Logo" className="h-14" />
              </div>
  
              {/* Right side for desktop */}
              <div className="hidden md:flex items-center space-x-7">
                <a href="#" className="text-[#999999]">
                  For Suppliers
                </a>
                <a href="#" className="text-[#999999]">
                  For Retailer
                </a>
                <a href="#" className="text-[#999999]">
                  Location
                </a>
                <button className="px-8 py-2 border-2 border-[#00AEEF] text-[#00AEEF] font-semibold">
                  REQUEST A QUOTE
                </button>
              </div>
  
              {/* Hamburger Menu for Mobile */}
              <div className="md:hidden">
                <button className="p-2">
                  <img src="/menu-icon.png" alt="Menu Icon" className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Main navigation */}
        <div className="bg-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-12">
            <nav className="hidden md:flex justify-between px-4 py-4">
              {/* Navigation Links */}
              <div className="flex items-center space-x-8">
                <a
                  href="#"
                  className="text-[#003B6D] font-bold border-b-2 border-[#00AEEF] pb-1"
                >
                  Home
                </a>
                <a href="#" className="text-[#A8A8A8]">
                  About Us
                </a>
                <a href="#" className="text-[#A8A8A8]">
                  What We Do
                </a>
                <a href="#" className="text-[#A8A8A8]">
                  Brands
                </a>
                <a href="#" className="text-[#A8A8A8]">
                  News
                </a>
                <a href="#" className="text-[#A8A8A8]">
                  Careers
                </a>
                <a href="#" className="text-[#A8A8A8]">
                  Contact Us
                </a>
              </div>
  
              {/* Search Icon */}
              <div className="flex items-center">
                <button className="p-2 hover:text-gray-800">
                  <img src="/search-logo.png" alt="Search Icon" className="h-5 w-5" />
                </button>
              </div>
            </nav>
  
            {/* Mobile Menu */}
            <div className="md:hidden py-4">
              <nav className="flex flex-col space-y-2">
                <a
                  href="#"
                  className="text-[#003B6D] font-bold border-b-2 border-[#00AEEF] pb-1"
                >
                  Home
                </a>
                <a href="#" className="text-[#A8A8A8]">
                  About Us
                </a>
                <a href="#" className="text-[#A8A8A8]">
                  What We Do
                </a>
                <a href="#" className="text-[#A8A8A8]">
                  Brands
                </a>
                <a href="#" className="text-[#A8A8A8]">
                  News
                </a>
                <a href="#" className="text-[#A8A8A8]">
                  Careers
                </a>
                <a href="#" className="text-[#A8A8A8]">
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default NavigationHeader;
  