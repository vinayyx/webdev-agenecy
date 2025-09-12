export default function Footer() {
  return (
    <footer className="px-6 md:px-16 bg-[#18191B] lg:px-24 xl:px-32 w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-10 border-b border-gray-500/30">
        {/* Left section */}
        <div className="w-full md:w-1/3 max-w-96">
          <h1 className="font-bold text-3xl text-white">Xyntech</h1>
          <p className="mt-6 text-sm text-gray-500">
            We build modern, scalable, and visually stunning websites that grow
            your business
          </p>
          <div className="flex items-center gap-3 mt-4">
            {/* Social icons */}
            <a href="#">
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.167 2.5a9.1 9.1 0 0 1-2.617 1.275 3.733 3.733 0 0 0-6.55 2.5v.833a8.88 8.88 0 0 1-7.5-3.775s-3.333 7.5 4.167 10.833a9.7 9.7 0 0 1-5.834 1.667C8.333 20 17.5 15.833 17.5 6.25q0-.35-.067-.692A6.43 6.43 0 0 0 19.167 2.5"
                  stroke="#84cc16"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="#">
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15.833c-4.167 1.25-4.167-2.084-5.833-2.5m11.666 5v-3.225a2.8 2.8 0 0 0-.783-2.175c2.616-.292 5.366-1.283 5.366-5.833a4.53 4.53 0 0 0-1.25-3.125 4.22 4.22 0 0 0-.075-3.142s-.983-.292-3.258 1.233a11.15 11.15 0 0 0-5.833 0C5.225.541 4.242.833 4.242.833a4.22 4.22 0 0 0-.075 3.142 4.53 4.53 0 0 0-1.25 3.15c0 4.516 2.75 5.508 5.366 5.833a2.8 2.8 0 0 0-.783 2.15v3.225"
                  stroke="#84cc16"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="#">
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.333 6.667a5 5 0 0 1 5 5V17.5H15v-5.833a1.667 1.667 0 0 0-3.334 0V17.5H8.333v-5.833a5 5 0 0 1 5-5M5 7.5H1.667v10H5zM3.333 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333"
                  stroke="#84cc16"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between gap-10">
          {/* Resources */}
          <div>
            <h2 className="font-semibold text-white mb-4">RESOURCES</h2>
            <ul className="text-sm text-gray-500 space-y-2">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h2 className="font-semibold text-white mb-4">COMPANY</h2>
            <ul className="text-sm text-gray-500 space-y-2">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <p className="py-4 text-center text-xs md:text-sm text-gray-500">
        © 2025 Xyntech. All Rights Reserved.
      </p>
    </footer>
  );
}
