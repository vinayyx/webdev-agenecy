import React from "react";
import { useNavigate } from "react-router-dom";

export default function PriceTable() {
  const navigate = useNavigate();

  return (
    <section className="px-4 py-10 bg-gradient-to-b bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Responsive: cards on small screens, table on md+ */}
        <div className="md:hidden space-y-4">
          {/* Card for each service (mobile) */}
          {[
            {
              service: "Web Development",
              advantage: "Custom, responsive web apps with modern stack",
              price: "₹15000",
            },
            {
              service: "Web Design",
              advantage: "Pixel-perfect UI/UX and responsive designs",
              price: "₹10000",
            },
            {
              service: "SaaS / Custom Software",
              advantage: "Scalable solutions built for your business",
              price: "₹30000",
            },
            {
              service: "E-commerce",
              advantage: "Full store setup + payment & shipping integration",
              price: "₹12000",
            },
            {
              service: "WordPress Portfolio",
              advantage: "Fast, SEO-friendly portfolio sites",
              price: "Special: ₹999 / month (12 months)",
            },
            {
              service: "SEO",
              advantage: "On-page & off-page SEO to increase organic traffic",
              price: "₹8000",
            },
          ].map((item) => (
            <div
              key={item.service}
              className="bg-white/5 rounded-2xl p-4 border-l-4 border-[#D0FF71]"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{item.service}</h3>
                <span className="text-sm text-gray-300">{item.price}</span>
              </div>
              <p className="mt-2 text-sm text-gray-300">{item.advantage}</p>
              <div className="mt-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-4 py-2 rounded-lg bg-lime-500 text-white font-medium 
             hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Table for md+ screens */}
        <div className="hidden md:block bg-white/5 rounded-2xl overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b border-[#D0FF71]">
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-200">
                  Service
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-200">
                  Advantages
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-200">
                  Price (Starting from)
                </th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/2">
                <td className="px-6 py-5">Web Development</td>
                <td className="px-6 py-5">
                  Custom responsive web apps, APIs, performance optimizations
                </td>
                <td className="px-6 py-5">₹15000</td>
                <td className="px-6 py-5">
                  <button
                    onClick={() => navigate("/contact")}
                    className="px-4 py-2 rounded-lg bg-[#D0FF71] text-black font-bold 
             hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Contact
                  </button>
                </td>
              </tr>

              <tr className="border-b border-white/5 hover:bg-white/2">
                <td className="px-6 py-5">Web Design</td>
                <td className="px-6 py-5">
                  UI/UX, Figma-to-code, responsive & accessible designs
                </td>
                <td className="px-6 py-5">₹10000</td>
                <td className="px-6 py-5">
                  <button
                    onClick={() => navigate("/contact")}
                    className="px-4 py-2 rounded-lg bg-[#D0FF71] text-black font-bold 
             hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Contact
                  </button>
                </td>
              </tr>

              <tr className="border-b border-white/5 hover:bg-white/2">
                <td className="px-6 py-5">SaaS / Custom Software</td>
                <td className="px-6 py-5">
                  Scalable SaaS, multi-tenant apps, integrations
                </td>
                <td className="px-6 py-5">₹30000</td>
                <td className="px-6 py-5">
                  <button
                    onClick={() => navigate("/contact")}
                    className="px-4 py-2 rounded-lg bg-[#D0FF71] text-black font-bold 
             hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Contact
                  </button>
                </td>
              </tr>

              <tr className="border-b border-white/5 hover:bg-white/2">
                <td className="px-6 py-5">E-commerce</td>
                <td className="px-6 py-5">
                  Store setup, payment gateways, product & order flows
                </td>
                <td className="px-6 py-5">₹12000</td>
                <td className="px-6 py-5">
                  <button
                    onClick={() => navigate("/contact")}
                    className="px-4 py-2 rounded-lg bg-[#D0FF71] text-black font-bold 
             hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Contact
                  </button>
                </td>
              </tr>

              <tr className="border-b border-white/5 hover:bg-white/2 bg-gradient-to-r from-white/3 to-transparent">
                <td className="px-6 py-5 font-semibold">
                  WordPress Portfolio{" "}
                  <span className="ml-2 inline-block text-xs font-bold text-black bg-[#D0FF71] rounded-full px-2 py-1">
                    Offer
                  </span>
                </td>
                <td className="px-6 py-5">
                  Fast portfolio setup, ready-to-showcase, CMS access
                </td>
                <td className="px-6 py-5">
                  Only for portfolio — <strong>₹999 / month</strong> (for 12
                  months)
                </td>
                <td className="px-6 py-5">
                  <button
                    onClick={() => navigate("/contact")}
                    className="px-4 py-2 rounded-lg font-bold bg-[#D0FF71] text-black  
             hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Contact
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-white/2">
                <td className="px-6 py-5">SEO</td>
                <td className="px-6 py-5">
                  Keyword research, on-page & off-page, monthly reports
                </td>
                <td className="px-6 py-5">₹8000</td>
                <td className="px-6 py-5">
                  <button
                    onClick={() => navigate("/contact")}
                    className="px-4 py-2 rounded-lg bg-[#D0FF71] text-black font-bold 
             hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Contact
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Note / CTA */}
        <div className="mt-6 text-sm text-gray-300">
          <p>
            Prices shown are starting prices. Final cost depends on scope,
            integrations and timeline. Custom quotes and yearly discounts
            available — reach out for a tailored proposal.
          </p>
        </div>
      </div>
    </section>
  );
}
