import './App.css'
import foto_perfil from "/assets/foto-perfil-pablo.webp"
import { WordRotate } from "@/components/ui/word-rotate"
import data from "./content/content.json";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from 'react';


function App() {

  const comunicacion_content = data.comunicacion;
  const acercademi_content = data.acercademi;
  const desarrollo_content = data.desarrollo;

  {/* Slider Acerca de mi */ }

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % acercademi_content.length);
  const prev = () => setIndex((prev) => (prev - 1 + acercademi_content.length) % acercademi_content.length);

  {/* Slider Desarrollo web */ }

  const [d_index, set_d_Index] = useState(0)

  const nextSlide = () => set_d_Index((prev) => (prev + 1) % desarrollo_content.length)
  const prevSlide = () => set_d_Index((prev) => (prev - 1 + desarrollo_content.length) % desarrollo_content.length)

  const d_item = desarrollo_content[d_index];


  return (
    <>
      <header className="
        w-full min-h-screen
  grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2.5fr_1fr] lg:grid-rows-1
  items-center px-4 gap-x-10 gap-y-10
      ">
        {/* <header className="w-full min-h-screen grid grid-cols-[1fr_2.5fr_1fr] items-center px-4 gap-x-10"> */}
        {/* Sección izquierda: foto y cuadros */}

        <div className="flex flex-row items-center justify-center gap-2">
          <div className="flex flex-col gap-4 mt-24">
            <motion.div className="w-10 h-10 bg-warhol-banana" animate={{ rotate: 360 }}
              transition={{ duration: 1 }} />
            <motion.div className="w-10 h-10 bg-warhol-cyan" animate={{ rotate: -360 }}
              transition={{ duration: 0.5 }} />
          </div>
          <img
            src={foto_perfil}
            alt="Foto de Pablo"
            className="w-48 h-48 lg:w-60 lg:h-60 object-cover shadow-lg"

          />

        </div>

        {/* Sección central: título */}
        <div className='text-left'>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Pablo Riverio
          </h1>
          <WordRotate className="text-3xl font-bold text-white dark:text-white" words={["Comunicación", "Desarrollo Web", "Creatividad"]} />

          <div className='flex flex-row place-items-center'>
            <motion.div className="w-6 h-6 bg-warhol-violeta mr-6" animate={{ rotate: 180 }}
              transition={{ duration: 0.5 }} />
            <motion.a href="#acercaDeMi" whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}>
              <h3 className='text-2xl font-bold leading-tight'>Acerca de mi</h3>
            </motion.a>
          </div>
        </div>

        {/* Sección derecha: menú vertical */}
        <nav
          className="
      w-full
      grid grid-cols-2 gap-4 justify-items-end
      lg:flex lg:flex-col lg:items-end
      text-warhol-ink text-sm
  "
        >
          <div className="w-full flex flex-row gap-2 items-center justify-end ">
            <motion.a href="#comunicacion" className="hover:text-warhol-electric"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >Comunicación</motion.a>
            <motion.div className="w-10 h-10 bg-black" initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }} />
          </div>
          <div className="w-full flex flex-row gap-2 items-center justify-end">
            <motion.a href="#desarrollo" className="hover:text-warhol-electric"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >Desarrollo Web</motion.a>
            <motion.div className="w-10 h-10 bg-warhol-cyan" initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }} />
          </div>
          <div className="w-full flex flex-row gap-2 items-center justify-end">
            <motion.a href="#creatividad" className="hover:text-warhol-electric"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}

            >Creatividad</motion.a>
            <motion.div className="w-10 h-10 bg-warhol-banana" initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }} />
          </div>
          <div className="w-full flex flex-row gap-2 items-center justify-end">
            <motion.a href="#humor" className="hover:text-warhol-electric"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}

            >Humor</motion.a>
            <motion.div className="w-10 h-10 bg-warhol-pink" initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }} />
          </div>
        </nav>
      </header>

      <main>
        <motion.section
          id="acercaDeMi"
          className="flex flex-col bg-white/10 w-full px-20 place-items-center py-24 mb-12 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-row place-items-center w-full">
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
            <h3 className="text-4xl text-white font-bold leading-tight">Acerca de mi</h3>
          </div>

          <div className="text-lg mt-6 text-justify text-white">
            <p>
              Si, orgullosamente soy Nerd ochentoso, amo la tecnología pero crecí jugando a la bolita, desde niño la ciencia ficción me hizo buscar siempre más allá.
              Soy Licenciado en Ciencias de la Comunicación, Uruguayo, hice StandUp Comedy, como productor audiovisual trabajé en los principales canales de TV en entretenimiento, noticieros y hasta documental.
              Ahora hace años aprendo desarrollo web para volcar mi experiencia de trabajo en equipo, creatividad a través de las IT's.

            </p>
          </div>
          <div className="overflow-hidden w-full">
            <motion.section className="relative overflow-hidden w-full py-12">
              <div className="relative w-full flex justify-center items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    className="min-w-[300px] bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <img
                      src={`/assets/${acercademi_content[index].img}`}
                      alt={acercademi_content[index].title}
                      className="w-full h-80 object-cover"
                    />

                  </motion.div>
                </AnimatePresence>

                {/* Botones de navegación */}
                <button
                  onClick={prev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow px-3 py-1"
                >
                  ◀
                </button>
                <button
                  onClick={next}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow px-3 py-1"
                >
                  ▶
                </button>
              </div>
            </motion.section>


          </div>

          {/* Seccion Desarrollo web  */}


        </motion.section>

        <motion.section id='desarrollo' className='flex flex-col bg-white/10 text-warhol-ink w-full px-20 place-items-center py-24 mb-12 rounded-lg shadow-lg'
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true, amount: 0.3 }}  >
          <div className='flex flex-row place-items-center w-full'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
            <h3 className='text-4xl text-white font-bold leading-tight'>Desarrollo Web</h3>

          </div>
          <div className='text-lg mt-6 text-justify text-white'>

            <p>Le diseñé y publiqué una página web a un proyecto en el 2005, cuando aún no sabía nada de Desarrollo Web, porque sentía que tenía que tener una página web, para entonces la computadora siempre fue mi socia número uno a la hora de crear, ya fuera para editar sonido, escribir guiones o jugar a programar, desde mi primera tk-95 de 48 k de memoria. Estudié en Holberton School para tener una buena base de pensamiento computacional y aprendí a lo largo de varias academias distintas tecnologías que hoy me colocan más del lado del FullStack</p>
          </div>
          {/* Slider */}
          <div className="flex text-justify gap-12 mt-12 w-full">
            <div className="mt-6 flex gap-4">
              <button
                onClick={prevSlide}
                className="bg-white rounded-full shadow px-3 py-1"
              >
                ◀
              </button>

            </div>
            {/* Fotos a la izquierda */}
            <div className="flex flex-col gap-4 w-1/2">
              {d_item.images.map((src, i) => (
                <motion.img
                  key={i}
                  src={`/assets/desarrollo/${src}`}
                  alt={d_item.title}
                  className="rounded-lg shadow-lg object-cover h-68 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>

            {/* Texto a la derecha */}
            <div className="w-1/2 flex flex-col text-white">
              <h3 className="text-2xl font-semibold text-white dark:text-white">
                {d_item.title}
              </h3>
              <p className="mt-2 text-white dark:text-white">
                {d_item.description}
              </p>

              {/* Tecnologías */}
              <div className="mt-4 flex flex-wrap gap-2">
                {d_item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={d_item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-blue-600 dark:text-blue-400 hover:underline"
              >
                Ver proyecto →
              </a>

            </div>
            <div className="mt-6 flex gap-4">
              <button
                onClick={nextSlide}
                className="bg-white rounded-full shadow px-3 py-1"
              >
                ▶
              </button>

            </div>

          </div>
        </motion.section>
        {/* Seccion Comunicación  */}
        <motion.section
          id="comunicacion"
          className="flex flex-col bg-white/10 text-warhol-ink w-full px-20 place-items-center py-24 mb-12 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='flex flex-row place-items-center w-full'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
            <h3 className='text-4xl text-white font-bold leading-tight'>Comunicación</h3>

          </div>
          <div className='text-lg mt-6 text-justify text-white'>

            <p>Trabajé más de 15 años en medios de comunicación masiva, desde la producción de contenidos, guiones, edición y postproducción, hasta la coordinación de equipos de trabajo, dirección de proyectos y manejo de clientes. La comunicación es el arte de conectar personas, ideas y emociones, y he tenido el privilegio de hacerlo a través de diversos formatos y plataformas. Esta experiencia me ha enseñado la importancia de escuchar activamente, adaptarme a diferentes audiencias y transmitir mensajes claros y efectivos.</p>
          </div>
          {/* Nueva sección de tarjetas */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }, // animación escalonada
              },
            }}
          >
            {comunicacion_content.map((item, i) => (
              <motion.div
                key={i}
                className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src={`./assets/comunicacion/${item.img}`} alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-700">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.section>


        <motion.section id='creatividad' className='flex flex-col bg-white/10 text-warhol-ink w-full px-20 place-items-center py-24  mb-12 rounded-lg shadow-lg'
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true, amount: 0.3 }}  >
          <div className='flex flex-row place-items-center w-full'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />


            <h3 className='text-4xl text-white font-bold leading-tight'>Creatividad</h3>

          </div>
          <div className='text-lg mt-6 text-justify text-white'>

            <p>Siempre tengo que abrir la boca, si ya alguien lo hizo, se me ocurre que siempre puede ser distinto, me gusta que cada cosa tenga su personalidad, así que me es inavitable intentar crear, en el acierto o en el error, creo que es un gran hábito, y saber cuando no re invettar la rueda, también es clave, pero si se puede, se debe crear.</p>
          </div>
        </motion.section>
        <motion.section id='humor' className='flex flex-col bg-white/10 text-warhol-ink w-full px-20 place-items-center py-24  mb-12 rounded-lg shadow-lg'
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true, amount: 0.3 }}  >
          <div className='flex flex-row place-items-center w-full'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
            <h3 className='text-4xl text-white font-bold leading-tight'>Humor</h3>

          </div>
          <div className='text-lg mt-6 text-justify text-white'>
            <p>De los tres chiflados a Tiranos temblad, del agente Maxwll Smart, la Pantera Rosa, Monty Python, a los clásicos Uruguayos como Decalegrón, Telecataplun o los eternos Benny Hill, Chespirito, Mr Bean o lesluthiers, el humor ha marcado cada día de mi vida, admiré a estos genios del ingenio tanto, que muchas veces intenté trabajar junto a los que a pesar de los pesares, elegían hacer humor. Parece chiste, pero yo mismo me subí al escenario a tomarme el humor en serio </p>
          </div>


        </motion.section>

      </main >
      <footer>

      </footer>



    </>
  )
}

export default App
