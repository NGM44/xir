import { SketchLogoIcon } from '@radix-ui/react-icons'

export default function HeroPage() {
  return (
    <div className="bg-transparent pt-10">
      <div className="relative isolate">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-900 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-900">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div
          id="Home"
          className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-"
        >
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-100 hover:ring-gray-100">
                <SketchLogoIcon />
                <span className="font-semibold text-white">
                  Alternative Investment
                </span>
              </div>
            </div>

            <h1 className="mt-10 max-w-2xl text-4xl font-bold tracking-tight text-gray-9100 sm:text-6xl">
              XIRR - An Alternative Investment Platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              XIRR&apos;s artificial intelligence model combines industry
              investment expertise to deliver exceptional, strategic results.
            </p>
            <div className="mt-10 flex flex-row whitespace-nowrap gap-4 justify-start sm:items-center  gap-x-6">
              <a
                href="mailto:buildwealth@thexirr.com"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact us
              </a>
              <a
                href="https://chat.whatsapp.com/B7XxcLDCmsMJgDgNxny6iw"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
