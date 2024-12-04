export default function CTA3() {
    return (
      <div id="diversify" className="relative isolate bg-transparent">
        <div
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
          aria-hidden="true"
        ></div>
  
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-24 ">
          <div className="relative isolate overflow-hidden bg-gray-900 drop-shadow-sm shadow-pink-100 mx-4 rounded-2xl px-6 py-24 text-center shadow-lg border-t border-white sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            JOIN A PRIVATE ALTERNATIVE INVESTMENT COMMUNITY
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Our membership is a diverse group of individuals and family offices passionate about learning alternate investment opportunities in India, share the perspectives about the the risk and return profile of this relatively new asset class.


            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://chat.whatsapp.com/B7XxcLDCmsMJgDgNxny6iw"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Join Community
              </a>
              {/* AN EXCLUSIVE NETWORK */}
            </div>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute right-1 bottom-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    )
  }
  