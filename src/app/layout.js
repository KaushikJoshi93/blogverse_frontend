import './globals.css'
import { Josefin_Sans } from 'next/font/google'
import { Suspense } from 'react'
import Loading from './loading'
import Footer from '@/components/Footer'
import dynamic from "next/dynamic";

const Navbar = dynamic(
  () => {
    return import("@/components/Navbar");
  },
  { ssr: false }
);

const josefin_Sans = Josefin_Sans({ 
  weight:['100','200','300','400','500','600','700'],
  subsets: ['latin']
 })

export const metadata = {
  title: "Blogverse || A blog which is in the universe",
  description: 'A blog which is in the universe',
}

export default function RootLayout({ children  }) {
  return (
    <html lang="en">
      <body className={josefin_Sans.className + "  bg-[#111827] "}>
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer/>
      </body>
    </html>
  )
}
