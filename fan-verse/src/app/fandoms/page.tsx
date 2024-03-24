'use client'

import { CardHoverEffectDemo } from "@/components/CardHoverDemo";

const Home = () => {
  return (
    <>
    <div className="h-full w-full dark:bg-blue-400 bg-purple-100 relative">
        <div className="flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-purple-500 py-8">
        Choose your Fandom!
      </p>
      </div>
      <CardHoverEffectDemo />
    </div>
    
    </>
  )
}

export default Home;
