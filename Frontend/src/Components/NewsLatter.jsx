export default function NewsLatter() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div className="w-full px-2 text-center text-white py-20 flex flex-col items-center justify-center">
        <p className="text-[#D0FF71] font-medium">Get updated</p>
        <h1 className="max-w-lg font-semibold text-4xl/[44px] mt-2">
          Subscribe to our newsletter & get the latest news
        </h1>

        {/* Input + Button */}
        <div className="flex flex-row items-center justify-center mt-10 border border-slate-600 focus-within:outline focus-within:outline-[#D0FF71] text-sm rounded-full h-12 max-w-md w-[90%] overflow-hidden px-1">
          <input
            type="text"
            className="bg-transparent outline-none px-3 w-full flex-1 text-sm sm:text-base"
            placeholder="Enter your email address"
          />
          <button className="bg-[#D0FF71] text-black rounded-full px-4 sm:px-6 h-10 sm:h-11 ml-2 flex items-center justify-center text-sm sm:text-base whitespace-nowrap">
            Subscribe now
          </button>
        </div>
      </div>
    </>
  );
}
