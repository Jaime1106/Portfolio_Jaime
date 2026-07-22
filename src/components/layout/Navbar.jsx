import { useEffect, useState } from "react";
import Container from "../ui/Container";

function Navbar() {

  const [scrolled,setScrolled]=useState(false);

  useEffect(()=>{

      const scroll=()=>{

          setScrolled(window.scrollY>20);

      }

      window.addEventListener("scroll",scroll);

      return ()=>window.removeEventListener("scroll",scroll);

  },[]);

  return(

<nav
className={`fixed w-full z-50 transition-all duration-300 ${
scrolled
? "backdrop-blur-xl bg-slate-950/80 border-b border-slate-800"
: "bg-transparent"
}`}
>

<Container className="flex justify-between items-center py-5">

<h1 className="font-bold text-xl">

Jaime.

</h1>

<div className="hidden md:flex gap-10">

<a href="#about">Sobre mí</a>

<a href="#skills">Skills</a>

<a href="#projects">Proyectos</a>

<a href="#contact">Contacto</a>

</div>

</Container>

</nav>

  )

}

export default Navbar