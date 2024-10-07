import { Card } from "@/components/card";

import Image from "next/image";

import tailwind from "@/assets/tailwind2.png"
import react from "@/assets/react.png"
import next from "@/assets/nextjs.png"
import jquery from "@/assets/jquery-badge.png"

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center flex-wrap gap-4 my-24 w-full">
      <div className="flex flex-row items-center justify-center flex-wrap gap-8 my-24 w-full">
        <Card id="#s1" name="React" description="lalalallalalallalalal suase sefuyqwerhw cviusehriqaure siurheauirheuir eurhqeurhqe"/>
        <Card id="#s2" name="TailWind" description="lalalallalalallalalal suase sefuyqwerhw cviusehriqaure siurheauirheuir eurhqeurhqe"/>
        <Card id="#s3" name="Next.js" description="lalalallalalallalalal suase sefuyqwerhw cviusehriqaure siurheauirheuir eurhqeurhqe"/>
        <Card id="#s4" name="JQuery" description="lalalallalalallalalal suase sefuyqwerhw cviusehriqaure siurheauirheuir eurhqeurhqe"/>
      </div>
      <div className="w-full">
        <section id="s1" className="flex flex-col justify-center items-center gap-3 w-full bg-azu p-4">
            <Image src={react} alt="React" className="w-32 h-32"/>
            <h3 className=" text-white font-bold text-xl">React</h3>
            <p className=" text-white font-medium p-8">React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.</p>
        </section>
        <section id="s2" className="flex flex-col justify-center items-center gap-3 w-full p-4">
            <Image src={tailwind} alt="TailWind" className="w-32 h-32"/>
            <h3 className="font-bold text-xl">Tailwind</h3>
            <p className="p-8 font-medium" >Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.</p>
        </section>
        <section id="s3" className="flex flex-col justify-center items-center gap-3 w-full bg-azu p-4">
            <Image src={next} alt="React" className="w-32 h-32"/>
            <h3 className=" text-white font-bold text-xl">Next.js</h3>
            <p className=" text-white font-medium p-8">Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.</p>
        </section>
        <section id="s4" className="flex flex-col justify-center items-center gap-3 w-full p-4">
            <Image src={jquery} alt="TailWind" className="w-32 h-32"/>
            <h3 className="font-bold text-xl">jQuery</h3>
            <p className="p-8 font-medium" >jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animations, and Ajax.</p>
        </section>
      </div>
    </div> 
  )
};