'use client'
import Navbar from '@/components/Navbar'
import './globals.css'
import { Josefin_Sans } from 'next/font/google'
import { Suspense, useEffect } from 'react'
import Loading from './loading'
import Footer from '@/components/Footer'
import { useAuth } from '@/hooks/useAuth'

const josefin_Sans = Josefin_Sans({ 
  weight:['100','200','300','400','500','600','700'],
  subsets: ['latin']
 })

export const metadata = {
  title: "Blogverse || A blog which is in the universe",
  description: 'A blog which is in the universe',
}

export default function RootLayout({ children  }) {
  const {getUser} = useAuth();
  useEffect(()=>{
    getUser();
  },[])
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
