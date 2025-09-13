import React, { useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners"; // react-spinners

export default function NewsLatter() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "ef1b7879-bab3-48ba-be03-09ca0487fd3e");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Subscribed");
        event.target.reset();
      } else {
        toast.error("Error submitting form");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <div className="w-full px-2 text-center py-20 flex flex-col items-center justify-center">
        <p className="text-[#D0FF71] font-medium">Get updated</p>
        <h1 className="max-w-lg font-semibold text-4xl/[44px] mt-2">
          Subscribe to our newsletter & get the latest news
        </h1>

        <form
          onSubmit={onSubmit}
          className="flex flex-row items-center justify-center mt-10 border border-slate-600 focus-within:outline focus-within:outline-[#D0FF71] text-sm rounded-full h-12 max-w-md w-[90%] overflow-hidden px-1"
        >
          <input
            type="email"
            name="email"
            required
            className="bg-transparent outline-none px-3 w-full flex-1 text-sm sm:text-base"
            placeholder="Enter your email address"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#D0FF71] text-black rounded-full px-4 sm:px-6 h-10 sm:h-11 ml-2 flex items-center justify-center text-sm sm:text-base whitespace-nowrap ${
              loading ? "cursor-not-allowed opacity-70" : ""
            }`}
          >
            {loading ? <ClipLoader size={20} color="#000" /> : "Subscribe now"}
          </button>
        </form>
      </div>
    </>
  );
}
