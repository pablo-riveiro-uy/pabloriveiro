
import './App.css'
import foto_perfil from "./assets/foto-perfil-pablo.webp";


function App() {



  return (
    <>
      <header className="w-full min-h-screen grid grid-cols-[1fr_2.5fr_1fr] items-center px-4 gap-x-10">
        {/* Sección izquierda: foto y cuadros */}
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="flex flex-col gap-4 mt-24">
            <div className="w-10 h-10 bg-warhol-banana" />
            <div className="w-10 h-10 bg-warhol-cyan" />
          </div>
          <img
            src={foto_perfil}
            alt="Foto de Pablo"
            className="w-42 h-42 shadow-lg"
          />

        </div>

        {/* Sección central: título */}
        <div className='text-left'>
          <h1 className="text-warhol-tomato text-6xl font-bold leading-tight">
            Pablo Riverio
          </h1>
          <h2 className=' text-lg pb-5'>Desarrollo Web / Comunicación / Creatividad</h2>
          <div className='flex flex-row place-items-center'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
            <a href="#acercaDeMi">

              <h3 className='text-2xl font-bold leading-tight'>Acerca de mi</h3>
            </a>
          </div>

        </div>


        {/* Sección derecha: menú vertical */}
        <nav className="flex flex-col items-end gap-2 text-warhol-ink text-sm">
          <div className='flex flex-row gap-5 place-items-center'>
            <a href="#Comunicación" className="hover:text-warhol-electric">Comunicación</a>
            <div className="w-10 h-10 bg-black" />
          </div>
          <div className='flex flex-row gap-5 place-items-center'>
            <a href="#Comunicación" className="hover:text-warhol-electric">Desarrollo Web</a>
            <div className="w-10 h-10 bg-warhol-cyan" />
          </div>
          <div className='flex flex-row gap-5 place-items-center'>
            <a href="#Comunicación" className="hover:text-warhol-electric">Creatividad</a>
            <div className="w-10 h-10 bg-warhol-banana" />
          </div>
          <div className='flex flex-row gap-5 place-items-center'>
            <a href="#Comunicación" className="hover:text-warhol-electric">Humor</a>
            <div className="w-10 h-10 bg-warhol-pink" />
          </div>

        </nav>
      </header>

      <main>
        <section id='acercaDeMi' className='min-h-screen flex flex-col bg-white text-warhol-ink w-full h-full  px-20 place-items-center py-24'>
          <div className='flex flex-row place-items-center w-full'>
            <div className="w-6 h-6 bg-warhol-violeta mr-6" />
            <a href="#acercaDeMi">

              <h3 className='text-4xl text-warhol-ink font-bold leading-tight'>Acerca de mi</h3>
            </a>
          </div>
          <div className='text-m mt-6'>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos sit obcaecati sapiente explicabo sed odit autem repellat praesentium? Laboriosam ab nam id dicta neque ullam eaque odio accusantium excepturi!</p>
          </div>
        </section>

      </main>
      <footer>

      </footer>



    </>
  )
}

export default App
