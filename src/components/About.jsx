import Link from "next/link"

export default  () => {
    return (
        <section className="py-14 bg-[#111827] relative">
            <div className="max-w-screen-xl mx-auto md:px-8 ">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block  rounded-2xl flex justify-center">
                        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="rounded-xl md:max-w-lg w-[80%] md:w-full" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl ml-4 md:ml-0">
                        <h3 className="text-[#916607] font-semibold">
                            Professional services
                        </h3>
                        <p className="text-gray-200 text-xl md:text-3xl font-semibold ">
                        Unleash Your Thoughts, Explore the Blogverse
                        </p>
                        <p className="mt-3 text-gray-400 text-sm md:text-lg">
                        Blogverse is a vibrant and dynamic blog that aims to bring you a diverse range of captivating content across various topics.
                        </p>
                        <Link href="/about" className="inline-flex gap-x-1 items-center text-[#916607] hover:text-indigo-500 duration-150 font-medium">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
        </section>
    )
}

// bg-[url('https://img.freepik.com/free-photo/dark-blue-product-background_53876-92801.jpg?w=826&t=st=1688972858~exp=1688973458~hmac=611a96d240359bce1163fe49d340e1aca9855f6ed75cfc99ce509dc800d3cb15')]