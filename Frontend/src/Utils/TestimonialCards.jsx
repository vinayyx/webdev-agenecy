import React from "react";

export default function TestimonialCards() {
  const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
      text: "They delivered a seamless SaaS solution that boosted our efficiency",
      name: "Nishant",
      role: "SassFlow",
    },
    {
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600",
      text: "Our online store was built perfectly—smooth, fast, and sales started growing instantly..",
      name: "Sania",
      role: "Lalufi",
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop",
      text: "Their strategies gave our brand amazing visibility and real business growth.",
      name: "Ayush",
      role: "Increation",
    },

     {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop",
      text: "They created an engaging gaming experience that kept our users hooked.",
      name: "Neeraj",
      role: "Ninjagames",
    },
    
  ];

  return ( 
    <div className="w-full py-10  md:py-10 ">
      <div className="grid grid-cols-1    sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="w-full  flex-col max-w-[320px] bg-black text-white rounded-2xl overflow-hidden"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="h-[270px] w-full object-cover object-top transition-transform duration-300 hover:scale-105 rounded-t-2xl"
              />
              <div className="absolute bottom-0 z-10 h-40 w-full bg-gradient-to-t from-black to-transparent"></div>
            </div>

            {/* Content */}
            <div className="px-4 pb-6">
              <p className="font-medium border-b border-gray-600 pb-4">
                “{item.text}”
              </p>
              <p className="mt-4 font-semibold">— {item.name}</p>
              <p className="text-sm font-medium   text-[#D0FF71] bg-clip-text">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
