import { useState } from 'react'

const Mode = () => {
  const [theme, setTheme] = useState('')
  return (
    <div className={` ${theme}`}>
      <button
        onClick={() =>
          setTheme((prev) => {
            return !prev ? 'dark' : ''
          })
        }
        className="mb-10 rounded-md bg-blue-200 p-3 text-blue-600 dark:bg-blue-100"
      >
        Toggle dark mode
      </button>
      <div>
        <div className="space-y-6 rounded-t-xl border-b border-slate-100 bg-white p-4 pb-6 dark:border-slate-500 dark:bg-slate-800 sm:space-y-8 sm:p-10 sm:pb-8 lg:space-y-6 lg:p-6 xl:space-y-8 xl:p-10 xl:pb-8">
          <div className="flex items-center space-x-4">
            <img
              src="/full-stack-radio.png"
              alt=""
              width="88"
              height="88"
              className="flex-none rounded-lg bg-slate-100"
            />
            <div className="min-w-0 flex-auto space-y-1 font-semibold">
              <p className="text-sm leading-6 text-Docy-Blurple">
                <abbr title="Episode">Ep.</abbr> 128
              </p>
              <h2 className="truncate text-sm leading-6 text-slate-500 dark:text-slate-400">
                Scaling CSS at Heroku with Utility Classes
              </h2>
              <p className="text-lg text-slate-900 dark:text-slate-50">
                Full Stack Radio
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="relative">
              <div className="overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                <div
                  className="h-2 w-1/2 bg-cyan-500 dark:bg-cyan-400"
                  role="progressbar"
                  aria-label="music progress"
                  aria-valuenow="1456"
                  aria-valuemin="0"
                  aria-valuemax="4550"
                ></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -mt-2 -ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow ring-2 ring-cyan-500 dark:ring-cyan-400">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 ring-1 ring-inset ring-slate-900/5 dark:bg-cyan-400"></div>
              </div>
            </div>
            <div className="flex justify-between text-sm font-medium tabular-nums leading-6">
              <div className="text-cyan-500 dark:text-slate-100">24:16</div>
              <div className="text-slate-500 dark:text-slate-400">75:50</div>
            </div>
          </div>
        </div>
        <div className="flex items-center rounded-b-xl bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200">
          <div className="flex flex-auto items-center justify-evenly">
            <button type="button" aria-label="Add to favorites">
              <svg width="24" height="24">
                <path
                  d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="hidden sm:block lg:hidden xl:block"
              aria-label="Previous"
            >
              <svg width="24" height="24" fill="none">
                <path
                  d="m10 12 8-6v12l-8-6Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6v12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button type="button" aria-label="Rewind 10 seconds">
              <svg width="24" height="24" fill="none">
                <path
                  d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 5v3.111c0 .491.398.889.889.889H9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokelinecap="round"
                  strokelinejoin="round"
                />
              </svg>
            </button>
          </div>
          <button
            type="button"
            className="-my-2 mx-auto flex h-20 w-20 flex-none items-center justify-center rounded-full bg-white text-slate-900 shadow-md ring-1 ring-slate-900/5 dark:bg-slate-100 dark:text-slate-700"
            aria-label="Pause"
          >
            <svg width="30" height="32" fill="currentColor">
              <rect x="6" y="4" width="4" height="24" rx="2" />
              <rect x="20" y="4" width="4" height="24" rx="2" />
            </svg>
          </button>
          <div className="flex flex-auto items-center justify-evenly">
            <button type="button" aria-label="Skip 10 seconds">
              <svg width="24" height="24" fill="none">
                <path
                  d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 5v3.111c0 .491-.398.889-.889.889H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="hidden sm:block lg:hidden xl:block"
              aria-label="Next"
            >
              <svg width="24" height="24" fill="none">
                <path
                  d="M14 12 6 6v12l8-6Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokelinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 6v12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokelinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="rounded-lg px-2 text-xs font-semibold leading-6 text-slate-500 ring-2 ring-inset ring-slate-500 dark:bg-slate-500 dark:text-slate-100 dark:ring-0"
            >
              1x
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mode
