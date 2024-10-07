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
        <Card id="#s1" name="React" description="React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript."/>
        <Card id="#s2" name="TailWind" description="Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML."/>
        <Card id="#s3" name="Next.js" description="Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components."/>
        <Card id="#s4" name="JQuery" description="jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animations, and Ajax."/>
      </div>
      <div className="w-full">
        <section id="s1" className="flex flex-col justify-center items-center gap-3 w-full bg-azu p-4">
            <Image src={react} alt="React" className="w-32 h-32"/>
            <h3 className=" text-white font-bold text-xl">React</h3>
            <p className=" text-white font-medium p-8">React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[9][10] A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements. It was first launched on 29 May 2013.</p>
        </section>
        <section id="s2" className="flex flex-col justify-center items-center gap-3 w-full p-4">
            <Image src={tailwind} alt="TailWind" className="w-32 h-32"/>
            <h3 className="font-bold text-xl">Tailwind</h3>
            <p className="p-8 font-medium" >Tailwind CSS is an open-source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.</p>
        </section>
        <section id="s3" className="flex flex-col justify-center items-center gap-3 w-full bg-azu p-4">
            <Image src={next} alt="React" className="w-32 h-32"/>
            <h3 className=" text-white font-bold text-xl">Next.js</h3>
            <p className=" text-white font-medium p-8">React documentation mentions Next.js among "Recommended Toolchains" advising it to developers when "building a server-rendered website with Node.js".[6] Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server-side. Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.</p>
        </section>
        <section id="s4" className="flex flex-col justify-center items-center gap-3 w-full p-4">
            <Image src={jquery} alt="TailWind" className="w-32 h-32"/>
            <h3 className="font-bold text-xl">jQuery</h3>
            <p className="p-8 font-medium" >jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animations, and Ajax. It is free, open-source software using the permissive MIT License.[4] As of August 2022, jQuery is used by 77% of the 10 million most popular websites. Web analysis indicates that it is the most widely deployed JavaScript library by a large margin, having at least three to four times more usage than any other JavaScript library.</p>
            <p></p>
        </section>
      </div>
    </div> 
  )
};