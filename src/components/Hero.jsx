import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative bg-[#111827] w-full p-0 m-0">
            <div className="relative flex flex-col top-0">
                <div className="absolute inset-0">
                    <img src="https://img.freepik.com/free-photo/spaceship-orbits-dark-galaxy-glowing-blue-comet-generated-by-ai_188544-9662.jpg?w=900&t=st=1688664190~exp=1688664790~hmac=180e984c408b4185c989de8206fe47b75c2af704d4966e80de5a7fbfc814f31a" alt="Background Image" className="object-cover object-center w-full h-full opacity-50" />
                </div>
                <div className="relative h-screen flex items-center justify-center">
                    <div className="text-white text-center">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Blogverse</h1>
                        <p className="text-lg">Explore the jouney with us.</p>
                        <Link href={"/blogs"}>
                            <button className="bg-[#025764] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8">Read Articles</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='absolute left-[40%] inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
        </section>

    )
}

export default Hero; 