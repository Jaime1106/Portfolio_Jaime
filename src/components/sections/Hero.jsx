import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../ui/Button";
import Container from "../ui/Container";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-40 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-blue-600/20 blur-[180px]" />

      <Container className="grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <p className="uppercase tracking-[5px] text-blue-400 mb-4">

            Full Stack Developer

          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">

            Hola,

            <br />

            Soy <span className="text-blue-500">Jaime De La Cruz</span>

          </h1>

          <p className="mt-8 text-xl text-slate-400 leading-9">

            Estudiante de Ingeniería de Sistemas apasionado por el desarrollo
            Full Stack, la Inteligencia Artificial y la creación de soluciones
            tecnológicas para empresas.

          </p>

          <div className="flex gap-5 mt-10">

            <Button href="#projects">

              Ver proyectos

            </Button>

            <Button
              variant="secondary"
              href="/cv.pdf"
            >

              Descargar CV

            </Button>

          </div>

          <div className="flex gap-6 mt-10">

            <a
              href="https://github.com/Jaime1106"
              target="_blank"
            >
              <FaGithub size={28}/>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
            >
              <FaLinkedin size={28}/>
            </a>

          </div>

        </motion.div>

        <motion.div

          initial={{opacity:0,x:40}}

          animate={{opacity:1,x:0}}

          transition={{duration:.8}}

          className="flex justify-center"

        >

          <img

            src="./public/me.jpeg"

            className="w-[380px] rounded-full border border-slate-800"

          />

        </motion.div>

      </Container>

    </section>
  );
}

export default Hero;