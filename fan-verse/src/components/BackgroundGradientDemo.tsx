"use client";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/nav/fandom/anime.jpeg`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Naruto Kunnnnnnn
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Anime fandoms are awesome because they create vibrant communities filled with passionate individuals who celebrate creativity, storytelling, and diverse cultures through their shared love for anime.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Join now</span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            Take the quiz
          </span>
        </button>
      </BackgroundGradient>

      
    </div>
  );
}
