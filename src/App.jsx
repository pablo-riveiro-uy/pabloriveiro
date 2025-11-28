
import './App.css'
import foto_perfil from "./assets/foto-perfil-pablo.webp";


function App() {



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
            <div className="w-10 h-10 bg-warhol-banana" />
            <div className="w-10 h-10 bg-warhol-cyan" />
          </div>
          <img
            src={foto_perfil}
            alt="Foto de Pablo"
  className="w-48 h-48 lg:w-60 lg:h-60 object-cover shadow-lg"

          />

        </div>

        {/* Sección central: título */}
        <div className='text-left'>
          <h1 className="text-warhol-tomato text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Pablo Riverio
          </h1>
          <h2 className=' text-base sm:text-lg lg:text-xl pb-5'>Desarrollo Web / Comunicación / Creatividad</h2>
          <div className='flex flex-row place-items-center'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
            <a href="#acercaDeMi">
              <h3 className='text-2xl font-bold leading-tight'>Acerca de mi</h3>
            </a>
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
          <div className="w-full flex flex-row gap-2 items-center justify-end">
            <a href="#comunicacion" className="hover:text-warhol-electric">Comunicación</a>
            <div className="w-10 h-10 bg-black" />
          </div>
          <div className="w-full flex flex-row gap-2 items-center justify-end">
            <a href="#desarrollo" className="hover:text-warhol-electric">Desarrollo Web</a>
            <div className="w-10 h-10 bg-warhol-cyan" />
          </div>
          <div className="w-full flex flex-row gap-2 items-center justify-end">
            <a href="#creatividad" className="hover:text-warhol-electric">Creatividad</a>
            <div className="w-10 h-10 bg-warhol-banana" />
          </div>
          <div className="w-full flex flex-row gap-2 items-center justify-end">
            <a href="#humor" className="hover:text-warhol-electric">Humor</a>
            <div className="w-10 h-10 bg-warhol-pink" />
          </div>
        </nav>
      </header>

      <main>
        <section id='acercaDeMi' className='flex flex-col bg-white text-warhol-ink w-full px-20 place-items-center py-24 mb-12'>
          <div className='flex flex-row place-items-center w-full'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
              <h3 className='text-4xl text-warhol-ink font-bold leading-tight'>Acerca de mi</h3>
     
          </div>
          <div className='text-m mt-6 text-justify'>
            <p>Si, orgullosamente soy Nerd ochentoso, amo la tecnología pero crecí jugando a la bolita, desde niño la ciencia ficción me hizo buscar siempre más allá.
               Soy Licenciado en Ciencias de la Comunicación, Uruguayo, hice StandUp Comedy, como productor audiovisual trabajé en los principales canales de TV en entretenimiento, noticieros y hasta documetnal
               Ahora hace años aprendo desarrollo web para volcar mi experiencia de trabajo en equipo, creatividad a través de las IT's </p>
          </div>
        </section>
        <section id='comunicacion' className='flex flex-col bg-white text-warhol-ink w-full px-20 place-items-center py-24 mb-12'>
          <div className='flex flex-row place-items-center w-full'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
                  <h3 className='text-4xl text-warhol-ink font-bold leading-tight'>Comunicación</h3>
              </div>
          <div className='text-m mt-6 text-justify'>

            <p>Mi camino comenzó haciendo radio en mi barrio, estudié comunciación y pronto me enamoré de la imagen, trabajé como camarógrafo y editor para formatos de entretenimiento, humor, noticiero y hasta documental ya sea en canal !0, canal 4, canal 5 y una lista larga de emprendedores, empresas y artistas con los que aprendí 15 años a refinar lenguajes, transmitir ideas, dirigirse a públicos y sobre todo, en tiempo y forma</p>
          </div>
        </section>
        <section id='desarrollo' className='flex flex-col bg-white text-warhol-ink w-full px-20 place-items-center py-24 mb-12'>
          <div className='flex flex-row place-items-center w-full'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
               <h3 className='text-4xl text-warhol-ink font-bold leading-tight'>Desarrollo Web</h3>

          </div>
          <div className='text-m mt-6 text-justify'>

            <p>Le diseñé y publiqué una página web a un proyecto en el 2005, cuando aún no sabía nada de Desarrollo Web, porque sentía que tenía que tener una página web, para entonces la computadora siempre fue mi socia número uno a la hora de crear, ya fuera para editar sonido, escribir guiones o jugar a programar, desde mi primera tk-95 de 48 k de memoria. Estudié en Holberton School para tener una buena base de pensamiento computacional y aprendí a lo largo de varias academias distintas tecnologías que hoy me colocan más del lado del FullStack</p>
          </div>
        </section>
        <section id='creatividad' className='flex flex-col bg-white text-warhol-ink w-full px-20 place-items-center py-24  mb-12'>
          <div className='flex flex-row place-items-center w-full'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />


              <h3 className='text-4xl text-warhol-ink font-bold leading-tight'>Creatividad</h3>

          </div>
          <div className='text-m mt-6 text-justify'>

            <p>Siempre tengo que abrir la boca, si ya alguien lo hizo, se me ocurre que siempre puede ser distinto, me gusta que cada cosa tenga su personalidad, así que me es inavitable intentar crear, en el acierto o en el error, creo que es un gran hábito, y saber cuando no re invettar la rueda, también es clave, pero si se puede, se debe crear.</p>
          </div>
        </section>
        <section id='humor' className='flex flex-col bg-white text-warhol-ink w-full px-20 place-items-center py-24  mb-12'>
          <div className='flex flex-row place-items-center w-full'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
              <h3 className='text-4xl text-warhol-ink font-bold leading-tight'>Humor</h3>

          </div>
          <div className='text-m mt-6 text-justify'>
            <p>De los tres chiflados a Tiranos temblad, del agente Maxwll Smart, la Pantera Rosa, Monty Python, a los clásicos Uruguayos como Decalegrón, Telecataplun o los eternos Benny Hill, Chespirito, Mr Bean o lesluthiers, el humor ha marcado cada día de mi vida, admiré a estos genios del ingenio tanto, que muchas veces intenté trabajar junto a los que a pesar de los pesares, elegían hacer humor. Parece chiste, pero yo mismo me subí al escenario a tomarme el humor en serio </p>
          </div>
        </section>

      </main>
      <footer>

      </footer>



    </>
  )
}

export default App
