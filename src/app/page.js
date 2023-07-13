import About from "@/components/About";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";



export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col ">
      <Hero />
      <About/>
      <Newsletter/>
    </main>
  )
}
