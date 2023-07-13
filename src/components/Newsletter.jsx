'use client';


export default () => {
    return (
        <section className="py-28 relative bg-[#111827]">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex">
                <div className="flex-1 max-w-lg">
                    <h3 className="text-xl md:text-3xl font-bold text-white">
                        Get our beautiful newsletter straight to your inbox.
                    </h3>
                </div>
                <div className="flex-1 mt-6 md:mt-0">
                    <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-x-3 md:justify-end ">
                        <div className="relative">
                            <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
        </section>
    )
}