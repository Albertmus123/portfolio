import React from 'react'

export const Contact = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-4">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Contact Us
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
        <label class="block">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
            </span>
            <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
            </label>
        </div>
        <div>
        <label class="block">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Subject
            </span>
            <input type="text"  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="subject..." />
            </label>
        </div>
        <div>
        <label class="block">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Message
            </span>
            <textarea rows={3} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="message ...." />
            </label>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send Message
          </button>
        </div>
      </form>

    </div>
  </div>
  )
}
