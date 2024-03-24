"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Button } from "./ui/button";
import Link from "next/link";

export function LampDemo() {

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Your Geekiness <br /> Deserves to be celebrated <br /> <br />
        <Link href="/fandoms"><Button variant={"ghost"} className="text-2xl">Explore Fandoms &rarr;</Button></Link> <br />
        <Link href="/marketplace"><Button variant={"ghost"} className="text-2xl">Checkout out Marketplace &rarr;</Button></Link>
      </motion.h1>
    </LampContainer>
  );
}
